import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAQylxiRhe28x39ygCfFCdy8YuLjE6_5Do',
  authDomain: 'larngearcamp19th.firebaseapp.com',
  databaseURL: 'https://larngearcamp19th.firebaseio.com',
  projectId: 'larngearcamp19th',
  storageBucket: 'larngearcamp19th.appspot.com',
  messagingSenderId: '3832635855',
  appId: '1:3832635855:web:35beb3f83be8d662'
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;
