import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHUqTDSjYQ3Seg9EBNb72aMoXyiP0xUOY',
  authDomain: 'ravemeets.firebaseapp.com',
  projectId: 'ravemeets',
  storageBucket: 'ravemeets.appspot.com',
  messagingSenderId: '902811217512',
  appId: '1:902811217512:web:5154b5751dbe8a741155dd',
  measurementId: 'G-W79MKEPCW6',
};

firebase.initializeApp(firebaseConfig);

export const answerImageStorage = firebase.storage();
export const answerImageFireStore = firebase.firestore();