import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

const firebaseConfig = {
  projectId: "simple-crm-2da08",
  appId: "1:532703917204:web:e4f7333e16be706a12f081",
  storageBucket: "simple-crm-2da08.appspot.com",
  apiKey: "AIzaSyBvHNOT-G9ZC_qUenOsEeqemLNNYeDx3DQ",
  authDomain: "simple-crm-2da08.firebaseapp.com",
  messagingSenderId: "532703917204"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions())  
  ]
};