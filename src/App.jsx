import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Answers from "./components/Answers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
