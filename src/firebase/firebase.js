import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

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

export {app, auth};