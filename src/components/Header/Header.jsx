import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import appLogo from "../../../public/images/logoBagel.png";
import { Button } from "react-bootstrap";
import "./styles.css";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="roboto-regular">
            <img
              src={appLogo}
              alt="App Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
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
                Home
              </NavLink>
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About the App
              </NavLink>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
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
              className="roboto-bold"
              style={{
                backgroundColor: "#3BA1C8",
                padding: "10px 22px",
                marginLeft: "10px",
                color: "white",
                border: "none",
                borderRadius: "20px",
              }}
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
