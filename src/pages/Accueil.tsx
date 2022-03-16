import { IonContent, IonPage } from '@ionic/react';
import './Accueil.css';

const Tab4: React.FC = () => {
  return (
    <IonPage className='safe-area'>

      <IonContent fullscreen className="PageAccueil">
        <div className="Titre"> <strong> BE WATER </strong> </div>
        <div className="Trait"> </div>
        <div className="Slogan"> Où que vous soyez </div>
      </IonContent>  
    </IonPage>
  );
};

export default Tab4;
