import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm9797", "appId": "1:339282501236:web:0520fcc05ec63bf9a43b21", "storageBucket": "simple-crm9797.appspot.com", "apiKey": "AIzaSyDBPKKcDAlYjdq7usiop7MzfrFdulxE06w", "authDomain": "simple-crm9797.firebaseapp.com", "messagingSenderId": "339282501236", "measurementId": "G-0GT2PRS3TS" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-2da08", "appId": "1:532703917204:web:e4f7333e16be706a12f081", "storageBucket": "simple-crm-2da08.appspot.com", "apiKey": "AIzaSyBvHNOT-G9ZC_qUenOsEeqemLNNYeDx3DQ", "authDomain": "simple-crm-2da08.firebaseapp.com", "messagingSenderId": "532703917204" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
