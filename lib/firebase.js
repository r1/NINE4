import firebase from 'firebase/app'
import "firebase/firestore";

const config = {

};

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
