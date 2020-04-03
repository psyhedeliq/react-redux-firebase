import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrMEMmk_TRubviFXwf2Z8EKO0fh-JZWfk',
  authDomain: 'react-redux-firestore-3549c.firebaseapp.com',
  databaseURL: 'https://react-redux-firestore-3549c.firebaseio.com',
  projectId: 'react-redux-firestore-3549c',
  storageBucket: 'react-redux-firestore-3549c.appspot.com',
  messagingSenderId: '334781220740',
  appId: '1:334781220740:web:284596463f8a717f673fd1'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
