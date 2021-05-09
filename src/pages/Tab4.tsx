import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import {loginUser} from '../firebase'
import { toast } from '../toast';
import './Tab3.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title" size="large" color="primary">Education</IonTitle>

          <IonMenuButton slot="end"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol>
                <IonList>
                  <IonItem>
                    <IonLabel>
                    <h4>2019 – now</h4> 
                      <h3>Laurea University of Applied Sciences</h3>
                      <p>Business Information Technology</p>                     
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                        <h4>2013 – 2016</h4> 
                      <h3>Edupoli College</h3>
                      <p>Tourism</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                    <h4>2007 – 2008</h4> 
                      <h3>Institute of Marketing (Helsinki)</h3>
                      <p>International trade</p>                      
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <h4>2000 – 2005</h4> 
                      <h3>Karelian State Pedagogical University</h3>
                      <p>Faculty of Foreign Languages</p>
                    </IonLabel>
                  </IonItem>
                  
                </IonList>
              </IonCol>
            </IonRow>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;