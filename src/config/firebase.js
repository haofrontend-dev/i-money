import * as firebase from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzQUhQucwyqDEkEWPdFVz5esJFX8Mzl-o",
  authDomain: "imoney-bae45.firebaseapp.com",
  projectId: "imoney-bae45",
  storageBucket: "imoney-bae45.appspot.com",
  messagingSenderId: "283776017194",
  appId: "1:283776017194:web:3ca26e72b66c49bb603453",
  measurementId: "G-956HYVKTFV",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getData(db) {
  const transactionsCol = collection(db, "transactions");
  const transactionsSnapshot = await getDocs(transactionsCol);
  const transactionsList = transactionsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return transactionsList;
}

export { getData, db };
