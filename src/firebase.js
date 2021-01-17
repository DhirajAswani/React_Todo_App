// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTB9aLdJUIj-JKb8Aqyu0EoGdmGmA-iwQ",
    authDomain: "to-do-app-6d3fa.firebaseapp.com",
    projectId: "to-do-app-6d3fa",
    storageBucket: "to-do-app-6d3fa.appspot.com",
    messagingSenderId: "1061956051522",
    appId: "1:1061956051522:web:de644d2283281de6cfc3db",
    measurementId: "G-Y8LEJ854NY"
  });

  const db = firebaseApp.firestore();

  export default db;