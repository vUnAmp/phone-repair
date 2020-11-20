import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import auth from 'firebase/auth';
import firestore from 'firebase/firestore';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

// export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default firebase;
