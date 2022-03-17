import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import "./Favoris.css";
import { useEffect, useState } from "react";
import { IonList, IonItem, IonLabel, IonToggle } from "@ionic/react";
import { removeCircle } from "ionicons/icons";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Array<string>>([]);

  useEffect(() => {
    const getFavorite = () => {
      const favs = JSON.parse(localStorage.getItem("favs") || "[]");
      setFavorites(favs);
    };
    getFavorite();
    const t = setInterval(() => {
      getFavorite();
    }, 5000)
    return () => clearInterval(t)
  }, []);

  return (
    <IonPage className="safe-area">
      <IonContent className="Favoris">
        <div className="Titre">
          <strong> MES FAVORIS </strong>
        </div>
        {/*-- List of Text Items --*/}
        <IonList className="liste">
          {favorites.map((fav) => (
            <IonItem key={fav}>
              <IonLabel>{fav}</IonLabel>
              <IonButton
                onClick={() => {
                  const i = favorites.findIndex((a) => fav === a);

                  setFavorites([
                    ...favorites.slice(0, i),
                    ...favorites.slice(i, -1),
                  ]);
                  localStorage.setItem("favs", JSON.stringify(favorites));
                }}
              >
                <IonIcon icon={removeCircle} />
              </IonButton>
            </IonItem>
          ))}
          <IonItem>
            <IonLabel>Kuta - Bali INDONESIE</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Paris - FRANCE</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Tulum - MEXIQUE</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>London - Angleterre ROYAUME-UNIS</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Wuhan - CHINE</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonItem>
            <IonLabel className="notification">
              Recevoir un email en cas de mise à jour sur le lieu
            </IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
// export default Favoris;
export default Favorites;
