import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUa3KOijVmccbcLflBsf0KYhtSLHKIcYs",
  authDomain: "emoribook.firebaseapp.com",
  projectId: "emoribook",
  storageBucket: "emoribook.appspot.com",
  messagingSenderId: "1037181588269",
  appId: "1:1037181588269:web:72e4f2bd6466cfc580b9a4",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
