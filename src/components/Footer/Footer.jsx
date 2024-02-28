import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
  <>
    <Navbar className="bg-body-tertiary" fixed='bottom'>
      <Container className="justify-content-center">
        <h6>&copy; 2024</h6>
      </Container>
    </Navbar>
  </>
  );
}

export default Footer;