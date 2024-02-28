import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Answer Sphere</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="Home" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            <NavLink to="AboutApp" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About the App
            </NavLink>
            <NavLink to="Contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About Us
            </NavLink>
            <NavLink to="AnswerPage" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
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