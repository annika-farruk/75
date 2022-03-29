import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBl-IDE7V6Nx5GgM0oc5lQX4EeEVhm2zEw",
  authDomain: "e-ride-47372.firebaseapp.com",
  projectId: "e-ride-47372",
  storageBucket: "e-ride-47372.appspot.com",
  messagingSenderId: "191610197999",
  appId: "1:191610197999:web:9271c69073ad460f4d481a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
