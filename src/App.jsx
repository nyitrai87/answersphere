import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./App.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthProvider } from "./contexts/authContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

import LoginModal from "./components/LoginModal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Answers from "./components/Answers";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Router>
          <LoginModal />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/answers" element={<Answers />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
