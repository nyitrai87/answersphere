import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./App.css";

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
    </>
  );
}

export default App;
