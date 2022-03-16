import { IonContent, IonImg, IonPage } from '@ionic/react';
import logo from "./Logo.png"
import './Accueil.css';

const Tab4: React.FC = () => {
  return (
    <IonPage className='safe-area'>
      <IonContent fullscreen className="PageAccueil button">
        <IonImg className="logo" src={logo} />
      
        <input className='button1' type="button" value="Entrer" />
          {/* <div>Envoyer</div> */}
      </IonContent>  
    </IonPage>
  );
};

export default Tab4;
