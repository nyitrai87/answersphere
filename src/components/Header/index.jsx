import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import appLogo from "/images/logoBagel.png";
import "./index.css";

function Header() {
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
              <NavLink
                to="/answers"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Answers
              </NavLink>
            </Nav>
            <Button
              variant="primary"
              type="submit"
              as={Link}
              to="/login"
              className="roboto-bold custom-btn login-btn"
            >
              Log in
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
