import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginModal, Header, Home, About, Contact, History, Footer, LogIn, Custom404 } from "./components";
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
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<LogIn />} />
            <Route path='/*' element={<Custom404 />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
