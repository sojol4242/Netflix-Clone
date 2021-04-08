// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHbsCTU-WvZ9g3xXkuWfXV98mDH0_IFfc",
  authDomain: "netflix-clone-b8107.firebaseapp.com",
  projectId: "netflix-clone-b8107",
  storageBucket: "netflix-clone-b8107.appspot.com",
  messagingSenderId: "421972231961",
  appId: "1:421972231961:web:3324c8b6ccb8b899232788",
  measurementId: "G-H6N6VZL0T4"
};
  
const app=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider()
export { auth, provider };
 