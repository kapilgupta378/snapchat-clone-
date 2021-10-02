import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYcGeA4VUD23pq91rTb1J3vetJTd5Ii54",
  authDomain: "snap-clone-455ad.firebaseapp.com",
  projectId: "snap-clone-455ad",
  storageBucket: "snap-clone-455ad.appspot.com",
  messagingSenderId: "394467627677",
  appId: "1:394467627677:web:f9c32206ca26c7faba7a74"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
