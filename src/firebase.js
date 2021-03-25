import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6nwVcpJXf_IZMaU4WorFH8usb_QCkvKk",
  authDomain: "tinder-clone-74647.firebaseapp.com",
  projectId: "tinder-clone-74647",
  storageBucket: "tinder-clone-74647.appspot.com",
  messagingSenderId: "689565479079",
  appId: "1:689565479079:web:c328177ba0d73c55a36b82",
  measurementId: "G-HL1DHKDFMF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the real-time db provided by firebase
const database = firebaseApp.firestore();

export default database;
