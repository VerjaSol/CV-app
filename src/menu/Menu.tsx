import { IonApp, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router";
import Tab2 from "../pages/Login";
import Tab1 from "../pages/Register";
import Tab3 from '../pages/Tab3';
import Tab4 from '../pages/Tab4';
import Tab5 from '../pages/Tab5';
import {logoutUser} from '../firebase';

const Menu: React.FC = () => {

    async function logout() {
        
        await logoutUser()
    
        window.location.href = "/Login"
      }
    return (
      <IonApp>
        <IonReactRouter>
          <IonMenu side="end" contentId="main">
            <IonHeader>
              <IonToolbar color="light">
                <IonTitle>MENU</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonMenuToggle auto-hide="false">
                  <IonItem button routerLink={"/tab3"} routerDirection="none">
                    <IonLabel>Personal Profile</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle auto-hide="false">
                  <IonItem button routerLink={"/tab4"} routerDirection="none">
                    <IonLabel>Education</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle auto-hide="false">
                  <IonItem button routerLink={"/tab5"} routerDirection="none">
                    <IonLabel>Skills</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                  <IonItem button onClick={logout}>
                    Log out
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route exact path="/register">
              <Tab1 />
            </Route>
            <Route exact path="/login">
              <Tab2 />
            </Route>

            <Route path="/tab3" component={Tab3} exact></Route>
            <Route path="/tab4" component={Tab4} exact></Route>
            <Route path="/tab5" component={Tab5} exact></Route>
            <Route exact path="/">
             <Redirect to="/login" />
          </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
    
};

export default Menu;