import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import {loginUser} from '../firebase'
import { toast } from '../toast';
import './Tab3.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title" size="large"> Skills</IonTitle>

          <IonMenuButton slot="end"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonCard>
            <IonRow>
              <IonCol>
                
                  <IonItem>
                   
                    
                      <h3> Technical Skills</h3>
                      <ul>
                      <li>Business Information Technology</li>
                      <li>HTML</li>
                      <li>SCC</li>
                      <li>JavaScript & React.js</li>
                      <li>Also Java & Python basics </li>
                      <li>Full Stack MERN</li>
                      </ul>

                    
                  </IonItem>
                  
                  
               
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol>
                
                  <IonItem>
                   
                    
                      <h3> Soft Skills</h3>
                      <ul>
                      <li>Problem-solving</li>
                      <li>Willingness to Learn</li>
                      <li>Teamworking</li>
                      <li>Responsibility</li>
                      <li>Analytical skill</li>
                      </ul>
                      </IonItem>
                      </IonCol>
            </IonRow>
                      </IonCard>
               
                             
                  <IonCard>
                  <IonRow>
              <IonCol>
                
                  <IonItem>
                   
                    
                      <h3> Languages</h3>
                      
                      <ul>
                      <li>English</li>
                      <li>Finnish</li>
                      <li>Russian</li>
                     
                      </ul>

                    
                  </IonItem>
                  
                 
                 
               
              </IonCol>
            </IonRow>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;