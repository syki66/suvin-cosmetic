// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAu_rNWGyXEIqsv6TrgFSyjMeFeXZKOiYQ',
  authDomain: 'suvincos.firebaseapp.com',
  projectId: 'suvincos',
  storageBucket: 'suvincos.appspot.com',
  messagingSenderId: '388014370249',
  appId: '1:388014370249:web:a9e7f34c5ad99e6ee00c18',
  measurementId: 'G-66DS83XXN6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const messaging = getMessaging(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
