//firebase Configuration
import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDM-jJmfS8HEl-9hGQ3RaomhFzdS5jwyKg",
  authDomain: "disney-clone-954d8.firebaseapp.com",
  projectId: "disney-clone-954d8",
  storageBucket: "disney-clone-954d8.appspot.com",
  messagingSenderId: "530440867155",
  appId: "1:530440867155:web:76798b191c427c3b5fa5a6",
};

// 👇 this is done only in nextjs not in react
// if the app is not initialized then initialize firebaseConfig else use the app which is already initialized

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
//can also default export
