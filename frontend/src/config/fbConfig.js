import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics'


const firebaseConfig = {
    apiKey: "AIzaSyD9Ll4LteSuXgdC_6Zv9zKJJNA8wYpOpXQ",
    authDomain: "wisapp-ca828.firebaseapp.com",
    databaseURL: "https://wisapp-ca828.firebaseio.com",
    projectId: "wisapp-ca828",
    storageBucket: "wisapp-ca828.appspot.com",
    messagingSenderId: "824828063022",
    appId: "1:824828063022:web:e83168ea660af1afa6debf",
    measurementId: "G-FDFJ1GC7ET"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;