import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { logoLinkedin, logoGithub } from "ionicons/icons";
import { Link, Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import {loginUser} from '../firebase'
import { toast } from '../toast';
import './Tab3.css';

const Tab3: React.FC = () => {
return (
  <IonPage id="back">
    <IonHeader>
      <IonToolbar>
        <IonTitle className="title" size="large" color="primary">
          Personal profile
        </IonTitle>

        <IonMenuButton slot="end"></IonMenuButton>
      </IonToolbar>
    </IonHeader>
    <IonContent id="back" fullscreen>
      <IonGrid id="back">
        <IonCard id="card">
          <IonRow>
            <IonCol>
              <IonImg id="picture" src="../assets/IMG_logo.jpg"></IonImg>
            </IonCol>
            <IonCol>
              <h4>Vera Soldatenkova</h4>
            </IonCol>
            <IonCardContent></IonCardContent>
          </IonRow>
        </IonCard>

        <IonCard>
          <IonRow>
            <IonCol>
              <h2>Welcome to my CV application</h2>
            </IonCol>
            <IonCardContent>
              I'm studying Business Information Technology in Laurea University
              of applied Sciences.
            </IonCardContent>
          </IonRow>
        </IonCard>
        <IonCard>
          <IonRow>
            <IonCol>
              <IonCardContent>
                Currently looking for a Junior or Trainee positions in Web and
                Mobile development ·JavaScript Developer job opportunities
              </IonCardContent>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCard>
          <IonCardHeader>Contact Information</IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol>
                <p>E-mail: vera.soldatenkova@student.laurea.fi</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem
                  href="https://www.linkedin.com/in/vera-soldatenkova-133153127/"
                  className="ion-activated"
                >
                  <IonIcon size="large" icon={logoLinkedin}>
                    </IonIcon>
                </IonItem>
                </IonCol>
                <IonCol>
                <IonItem
                  href="https://github.com/VerjaSol"
                  className="ion-activated"
                >
                  <IonIcon size="large" icon={logoGithub}>
                    </IonIcon>
                </IonItem>
                </IonCol>            
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonGrid>
    </IonContent>
  </IonPage>
);
}

export default Tab3;