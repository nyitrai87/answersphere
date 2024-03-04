import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
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