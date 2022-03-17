import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  helpOutline,
  heartOutline,
  chatbubblesOutline,
  earthOutline,
} from "ionicons/icons";
import Accueil from "./pages/Accueil";
import Explorer from "./pages/Explorer";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Favoris from './pages/Favoris';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "leaflet/dist/leaflet.css";
/* Theme variables */
import "./theme/variables.css";
import "./theme/Comfortaa.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/accueil">
              <Accueil />
            </Route>
            <Route exact path="/Explorer">
              <Explorer />
            </Route>
            <Route exact path="/FAQ">
              <FAQ />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Favoris">
              <Favoris />
            </Route>
            <Route exact path="/">
              <Redirect to="/accueil" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Explorer" href="/Explorer">
              <IonIcon icon={earthOutline} />
              <IonLabel> EXPLORER </IonLabel>
            </IonTabButton>
            <IonTabButton tab="FAQ" href="/FAQ">
              <IonIcon icon={helpOutline} />
              <IonLabel> FAQ </IonLabel>
            </IonTabButton>
            <IonTabButton tab="Contact" href="/Contact">
              <IonIcon icon={chatbubblesOutline} />
              <IonLabel> CONTACT </IonLabel>
            </IonTabButton>
            <IonTabButton tab="Favoris" href="/Favoris">
              <IonIcon icon={heartOutline} />
              <IonLabel> FAVORIS </IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
