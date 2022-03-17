import { IonContent, IonPage, IonIcon } from "@ionic/react";
import "./FAQ.css";
import { searchOutline } from "ionicons/icons";
import Question from "../components/Question";
import questions from "../components/questions.json";
import { useState } from "react"

const Faq: React.FC = () => {
  const [Titre, setTitre] = useState("");
  return (
    <IonPage className="safe-area">
      <IonContent fullscreen className="contenter">
        <div className="carrerecherche">
          <div className="carreTitre">
            <input
              type="text"
              className="rechercheInputTitre"
              placeholder="Recherche..."
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>
          <IonIcon icon={searchOutline} />
          <div className="searchOutline"></div>
        </div>

        <div className="carrequestion">
          <div className="Titre"> FAQ </div>
          {questions
            .filter((q) => {
              if (q.question.includes(Titre))
              return 1;
              else if (q.reponse.includes(Titre))
              return 1;
              else return 0;
            })
            .map(({ question, reponse }) => (
              <Question question={question} reponse={reponse} />
            ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Faq;
