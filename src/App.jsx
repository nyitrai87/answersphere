import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutApp from "./components/AboutApp/AboutApp";
import Contact from "./components/Contact/Contact";
import AnswerPage from "./components/AnswerPage/AnswerPage";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/answers" element={<AnswerPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
