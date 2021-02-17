import firebase from 'firebase/app'
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBT47QaJVKYBzYUVohQ4_Dxyn4KHrFRDEs",
  authDomain: "nine4-72b0a.firebaseapp.com",
  projectId: "nine4-72b0a",
  storageBucket: "nine4-72b0a.appspot.com",
  messagingSenderId: "405860165032",
  appId: "1:405860165032:web:a58b27b56bb2ffce27699d",
  measurementId: "G-VJQDKG553J",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
