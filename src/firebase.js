import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6UyAtxqYGz2K7fjgkfsNYRbe9HdkIP0Q",
  authDomain: "insta-clone-273f6.firebaseapp.com",
  databaseURL: "https://insta-clone-273f6.firebaseio.com",
  projectId: "insta-clone-273f6",
  storageBucket: "insta-clone-273f6.appspot.com",
  messagingSenderId: "202054596113",
  appId: "1:202054596113:web:bd6c3e045ef6b9d35ce3b0",
  measurementId: "G-J90DVREQB1",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const storage = firebase.storage();
export default firebase;
export { db, auth, storage };
