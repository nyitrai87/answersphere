import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
        <Container>
          <Navbar.Brand href="/">Answer Sphere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Ask the Universe
              </NavLink>
              <NavLink to="/about" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About
              </NavLink>
              <NavLink to="/contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact Us
              </NavLink>
              <NavLink to="/answers" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Answers
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;