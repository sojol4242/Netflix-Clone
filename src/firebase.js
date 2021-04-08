import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNeRcw6okNiuiu4G3tQq3KcgECK5-kINc",
  authDomain: "netflix-clone-bf4fd.firebaseapp.com",
  projectId: "netflix-clone-bf4fd",
  storageBucket: "netflix-clone-bf4fd.appspot.com",
  messagingSenderId: "418575399021",
  appId: "1:418575399021:web:b375c5d6de7b566724e764",
  measurementId: "G-NFLH7TQPSC"
};
  
const app=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider()
export { auth, provider };
 