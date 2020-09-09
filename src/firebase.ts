import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

if (!firebase.apps.length) {
  firebase.initializeApp(JSON.parse(process.env.FIREBASE as string));
}

export default firebase;
export const { auth, firestore } = firebase;
