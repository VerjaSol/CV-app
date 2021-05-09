import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import { toast } from '../toast';
import { registerUser} from '../firebase'
import './Register.css';

const Tab1: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [conpassword, setConPassword] = useState('')
  const [allowLogin, setAllowLogin] = useState(false);

  async function register(){
    if(password !== conpassword) {
      return toast("Passwords don't match!")
    }
    if(username.trim() === '' || password.trim()=== ''){
      return toast("Username and password are required")
    }
    const res = await registerUser(username, password)
      if(res){
        toast("You have registered successfully!")
        setAllowLogin(true)
        
      }
  }
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">REGISTER</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonText color="medium">
            <h3>Welcome to my personal CV-app</h3>
            <p>Please register to log in</p>
            </IonText>
          </IonCol>
        </IonRow>
          <IonRow>
            <IonCol>
        <IonInput id="input" placeholder="Username" 
                  onIonChange={(e: any) => setUsername(e.target.value)}/>
        </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
        <IonInput id="input" type="password" placeholder="Password" 
                  onIonChange={(e: any) => setPassword(e.target.value)}/>
        </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
        <IonInput id="input" type="password" placeholder="Confirm Password" 
                  onIonChange={(e: any) => setConPassword(e.target.value)}/>          
        
        </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={register} color="success">Register</IonButton>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        {allowLogin && <Redirect push to="/login" />}
        </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
