import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJYwX4fx8Vto36wm9tgD4nPse3Vpw7vsQ",
  authDomain: "biblioteca-3fe31.firebaseapp.com",
  projectId: "biblioteca-3fe31",
  storageBucket: "biblioteca-3fe31.appspot.com",
  messagingSenderId: "136788003049",
  appId: "1:136788003049:web:15fa6dd7b3f0830a580878",
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
