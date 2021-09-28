import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBJJ8dz1D2eviiZZgv-RAFlY5Q-er1Xj4Q',
  authDomain: 'ravemeets-29773.firebaseapp.com',
  projectId: 'ravemeets-29773',
  storageBucket: 'ravemeets-29773.appspot.com',
  messagingSenderId: '562568943509',
  appId: '1:562568943509:web:072b74f78939ea09d0489c',
  measurementId: 'G-1QMSBY0SLL',
};

const firebaseApp = initializeApp(firebaseConfig);

export const imageStorage = getStorage(firebaseApp);
