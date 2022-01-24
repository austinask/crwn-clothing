import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDGxwggZYPmKdM8g2rJaTiPjRzLEdPCMpM",
  authDomain: "crwn-db-67be4.firebaseapp.com",
  projectId: "crwn-db-67be4",
  storageBucket: "crwn-db-67be4.appspot.com",
  messagingSenderId: "917752869031",
  appId: "1:917752869031:web:b3729a42848402f3272b82"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;