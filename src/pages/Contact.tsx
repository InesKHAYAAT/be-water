import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <IonPage className="safe-area">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulaire de contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="contenter blocs button">
        <form>
          <div className="blocs">
            <div>Nom</div>
            <input type="text" />
            {/* <div>Nom</div> */}
            <div>Prénom</div>
            <input type="text" />
            {/* <div>Prénom</div> */}
            <div>Adresse email</div>
            <input type="text" />
            {/* <div>Adresse email</div> */}
            <div>Message</div>
            <textarea name="message"></textarea>
          </div>

          <input className='button1' type="button" value="Entrer" />
          {/* <div>Envoyer</div> */}

        </form>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
