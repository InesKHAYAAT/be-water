import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import countries from "../countries.json";
import { Geolocation } from "@capacitor/geolocation";
import "./Explorer.css";
import { addSharp } from "ionicons/icons";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [13, 41],
  popupAnchor: [0, -20],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Explorer: React.FC = () => {
  const [positions, setPositions] = useState<[number, number] | undefined>(
    undefined
  );

  useEffect(() => {
    const getPositions = async () => {
      const {
        coords: { latitude, longitude },
      } = await Geolocation.getCurrentPosition();
      console.log([latitude, longitude]);
      setPositions([latitude, longitude]);
    };
    getPositions();
    const t = setInterval(getPositions, 10000);

    return () => clearInterval(t);
  }, []);

  return (
    <IonPage className="safe-area">
      <IonContent className="contenter">
        <IonButton
          className="fav-button"
          onClick={() => {
            console.log("clicked");
            function inside(point: [number, number], vs: number[][]) {
              // ray-casting algorithm based on
              // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

              var x = point[0],
                y = point[1];

              var inside = false;
              for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                var xi = vs[i][0],
                  yi = vs[i][1];
                var xj = vs[j][0],
                  yj = vs[j][1];

                var intersect =
                  yi > y != yj > y &&
                  x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
                if (intersect) inside = !inside;
              }

              return inside;
            }
            const addFav = (name: string) => {
              console.log("add FAV " + name);
              const favs: Array<string> = JSON.parse(
                localStorage.getItem("favs") || "[]"
              );
              favs.push(name);
              localStorage.setItem("favs", JSON.stringify(favs));
            };

            (
              countries as {
                features: Array<{
                  properties: { ADMIN: string };
                  geometry:
                    | {
                        type: "Polygon";
                        coordinates: Array<Array<Array<number>>>;
                      }
                    | {
                        type: "MultiPolygon";
                        coordinates: Array<Array<Array<Array<number>>>>;
                      };
                }>;
              }
            ).features.forEach((country) => {
              if (
                country.geometry.type === "Polygon" &&
                positions &&
                inside(
                  positions,
                  country.geometry.coordinates.map((a) =>
                    a.map(([l, k]) => [k, l])
                  )[0] as any
                )
              ) {
                addFav(country.properties.ADMIN);
              } else if (
                positions &&
                country.geometry.type === "MultiPolygon"
              ) {
                country.geometry.coordinates.forEach((p) => {
                  if (
                    inside(
                      positions,
                      p.map((a) => a.map(([l, k]) => [k, l]))[0] as any
                    )
                  )
                    addFav(country.properties.ADMIN);
                });
              }
            });
          }}
        >
          <IonIcon icon={addSharp} />
          Fav
        </IonButton>
        <MapContainer
          className="maps"
          center={positions ?? [43.6112197, 1.4140136]}
          zoom={8}
          style={{ height: "100vh", width: "100wh" }}
          whenCreated={(map) => {
            setTimeout(() => {
              map.invalidateSize();
            }, 0);
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={positions ?? [43.6107964, 1.413661]}>
            <Popup>Votre position</Popup>
          </Marker>
          {(
            countries as {
              features: Array<{
                properties: { ADMIN: string };
                percentage: number;
                geometry:
                  | {
                      type: "Polygon";
                      coordinates: Array<Array<Array<number>>>;
                    }
                  | {
                      type: "MultiPolygon";
                      coordinates: Array<Array<Array<Array<number>>>>;
                    };
              }>;
            }
          ).features.map((country) => {
            const getColorFromPercentage = (percentage: number) => {
              if (percentage > 75) return "green";
              if (percentage > 40 && 74 > percentage) return "orange";
              if (percentage > 0 && 39 > percentage) return "red";
            };
            if (country.geometry.type === "Polygon") {
              return (
                <Polygon
                  color={getColorFromPercentage(country.percentage)}
                  fillColor={getColorFromPercentage(country.percentage)}
                  key={country.properties.ADMIN}
                  positions={
                    country.geometry.coordinates.map((a) =>
                      a.map(([l, k]) => [k, l])
                    ) as any as L.LatLngExpression[][]
                  }
                >
                  <Popup>{country.properties.ADMIN}</Popup>
                </Polygon>
              );
            } else {
              return (
                <Polygon
                  color={getColorFromPercentage(country.percentage)}
                  fillColor={getColorFromPercentage(country.percentage)}
                  key={country.properties.ADMIN}
                  positions={
                    country.geometry.coordinates.map((a) =>
                      a.map((b) => b.map(([l, k]) => [k, l]))
                    ) as any as L.LatLngExpression[][][]
                  }
                >
                  <Popup>{country.properties.ADMIN}</Popup>
                </Polygon>
              );
            }
          })}
        </MapContainer>
      </IonContent>
    </IonPage>
  );
};

export default Explorer;
