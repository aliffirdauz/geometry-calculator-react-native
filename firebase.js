import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBquoNfkNrOTE5SfH1q3b2f0dX3ZfdKf4A",
  authDomain: "reactnative-auth-afde9.firebaseapp.com",
  projectId: "reactnative-auth-afde9",
  storageBucket: "reactnative-auth-afde9.appspot.com",
  messagingSenderId: "796828085767",
  appId: "1:796828085767:web:ccf6bf9b3f93362fdd44a2",
  measurementId: "G-7TZTP6WXLH"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };