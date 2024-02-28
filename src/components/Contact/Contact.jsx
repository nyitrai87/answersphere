import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='about-us'>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reiciendis cupiditate quam consectetur velit libero minima, in quo, veniam ipsam sapiente dolorem similique omnis ratione. Eum consequuntur assumenda eaque et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati saepe recusandae quasi delectus beatae, natus exercitationem aspernatur molestias neque reiciendis sed magnam ipsam iusto iure voluptatibus consectetur sequi.
        </p>
      </div>
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email address here..." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name here..." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" name="message" placeholder="Enter your message here..." rows={5} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleShow}>
            Send
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your message has been sent!</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" className="close-btn" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Container>
    </>
  )
}

export default Contact;