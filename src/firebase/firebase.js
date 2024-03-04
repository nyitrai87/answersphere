import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANBxkoyaxu1i7T9SmFtbpEBtf6UCaPP8I",
  authDomain: "answersphere-b623a.firebaseapp.com",
  projectId: "answersphere-b623a",
  storageBucket: "answersphere-b623a.appspot.com",
  messagingSenderId: "440985263836",
  appId: "1:440985263836:web:dcdff412322a7ce91f1e19"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export {app, auth, firestore};

export async function addQuestionToFirebase(userId, question) {
  try {
    // Add the question to the Firestore collection
    await addDoc(collection(firestore, 'questions'), {
      userID: userID, 
      question: question,
      createdAt: new Date(), // Timestamp indicating when the question was asked
    });
    return true; // if it worked
  } catch (error) {
    console.error('Error adding question to Firestore:', error);
    return false; // if it didn't work
  }
}