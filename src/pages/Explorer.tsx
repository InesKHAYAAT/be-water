import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import countries from "../countries.json";
import "./Explorer.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Explorer: React.FC = () => {
  return (
    <IonPage className="safe-area">
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contenter">
        <MapContainer
          className="maps"
          center={[51.505, -0.09]}
          zoom={4}
          style={{ height: "100vh", width: "100wh" }}
          whenCreated={(map) => {
            setTimeout(() => {
              map.invalidateSize();
            }, 0);
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {(
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
          ).features.map((country) => {
            if (country.geometry.type === "Polygon") {
              return (
                <Polygon
                  color={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
                  fillColor={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
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
                  color={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
                  fillColor={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
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
