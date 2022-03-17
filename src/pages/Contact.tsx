import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <IonPage className="safe-area">
      <IonHeader>
        <IonToolbar>
          <IonTitle>FORMULAIRE DE CONTACT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="contenter blocs button">
        <form>
          <div className="blocs">
            <div>Nom</div>
            <input type="text" />
            <div>Prénom</div>
  
            <input type="text" />
            <div>Adresse email</div>
            <input type="text" />
            <div>Sujet</div>
            <textarea
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            ></textarea>
            <div>Message</div>
            <textarea
              name="message"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <a
            className="button1"
            type="button"
            href={`mailto:l.molio31@gmail.com?subject=${subject}&body=${body}`}
          >
            Envoyer
          </a>
          {/* <div>Envoyer</div> */}
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
