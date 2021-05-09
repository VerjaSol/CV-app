import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import { loginUser } from "../firebase";
import { toast } from "../toast";
import "./Login.css";

const Tab2: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allowLogin, setAllowLogin] = useState(false);

  async function login() {
    const res = await loginUser(username, password);
    if (!res) {
      toast("Check your username and password!");
    } else {
      toast("You have logged in successfully!");
      setAllowLogin(true);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonText color="medium">
            <h3>Welcome to my personal CV-app</h3>
            <p>Please login to proceed</p>
            </IonText>
            
          </IonCol>
        </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                id="input"
                placeholder="Username"
                onIonChange={(e: any) => setUsername(e.target.value)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                id="input"
                type="password"
                placeholder="Password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={login} color="success">Login</IonButton>
              {allowLogin && <Redirect push to="/tab3" />}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                New here? <Link to="/register">Register</Link>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
