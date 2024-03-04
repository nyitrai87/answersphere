import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import appLogo from "/images/logoBagel.png";
import "./index.css";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-nav" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="roboto-regular">
            <img className="app-logo" src={appLogo} alt="App Logo" />
            AnswerSphere
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Ask the Universe
              </NavLink>
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
              {loggedIn && (
                <NavLink
                  to="/answers"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Answers
                </NavLink>
              )}
            </Nav>
            {loggedIn ? (
              <Button
                variant="outline-primary"
                type="submit"
                as={Link}
                to="/"
                onClick={handleLogout}
                className="roboto-bold custom-btn login-btn"
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                as={Link}
                to="/login"
                className="roboto-bold custom-btn login-btn"
              >
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
