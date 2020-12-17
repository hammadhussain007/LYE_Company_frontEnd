import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAcxdAGyDCQZq3LnQqTUD_WbagkdNp7RBM",
  authDomain: "oilchange-d584a.firebaseapp.com",
  databaseURL: "https://oilchange-d584a.firebaseio.com",
  projectId: "oilchange",
  storageBucket: "oilchange.appspot.com",
  messagingSenderId: "233068136687",
  appId: "1:233068136687:web:3a7d9387d4bee454d4b31a"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };