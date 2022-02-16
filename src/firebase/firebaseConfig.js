import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth';
import {FacebookAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDW2zeCnn7aDyqghUBcun1wEzJhji83xQ",
  authDomain: "blockmaster-sprint-3.firebaseapp.com",
  projectId: "blockmaster-sprint-3",
  storageBucket: "blockmaster-sprint-3.appspot.com",
  messagingSenderId: "206092653389",
  appId: "1:206092653389:web:c14784e42378118bcb5d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { app, google, facebook };