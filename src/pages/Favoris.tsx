import { IonContent, IonPage } from "@ionic/react";
import "./Favoris.css";

const Favoris: React.FC = () => {
  return (
    <IonPage className="safe-area">
      <IonContent fullscreen className="PageAccueil">
        <div className="Titre">
          <strong> Nos favoris </strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favoris;
