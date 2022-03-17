import { IonContent, IonImg, IonPage } from "@ionic/react";
import logo from "./Logo1.png";
import "./Accueil.css";

const Acceuil: React.FC = () => {
  return (
    <IonPage className="safe-area">
      <IonContent fullscreen className="PageAccueil button">
        <IonImg className="logo1" src={logo} />

        <a className="button1" type="button" href="/Explorer">
          Entrer
        </a>
        {/* <div>Envoyer</div> */}
      </IonContent>
    </IonPage>
  );
};

export default Acceuil;
