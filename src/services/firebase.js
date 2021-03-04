import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC0VzRXn3bKJ9EEA9PGio03BSBENII00RA",
    authDomain: "saltychat-d351b.firebaseapp.com",
    projectId: "saltychat-d351b",
    storageBucket: "saltychat-d351b.appspot.com",
    messagingSenderId: "498164364514",
    appId: "1:498164364514:web:ec5a6b01f0d08f16ac9abb"
  };

  firebase.initializeApp(config);

  export default firebase;
  export const auth = firebase.auth;
  export const db = firebase.firestore();