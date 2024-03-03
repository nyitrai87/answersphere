import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Modal, Container, Col, Row, Image } from "react-bootstrap";
import { EnvelopeFill, HeartFill, Github } from "react-bootstrap-icons";
import logo from "/images/logoBagel.png";
import Anna from "/images/Anna-avatar.png";
import Ioana from "/images/Ioana-avatar.png";
import Adam from "/images/Adam-avatar.jpg";
import Rowan from "/images/Rowan-avatar.jpg";
import "./index.css";

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
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
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
      <Container>
        <h2>About Us</h2>
        <Container className="about-us mt-5">
          <p>
            <span style={{ fontWeight: "bold", color: "#3BA1C8" }}>
              <a
                href="https://github.com/nyitrai87/answersphere"
                target="_blank"
                style={{ color: "#3BA1C8", textDecoration: "none" }}
              >
                AnswerSphere{" "}
                <Github
                  size={24}
                  style={{ color: "black", marginBottom: "3px" }}
                  className="ms-1"
                />
              </a>
            </span>{" "}
            was created by 5 international students of the{" "}
            <Link
              className="edx-link"
              to="https://www.edx.org/boot-camps/coding/skills-bootcamp-in-front-end-web-development"
              target="_blank"
            >
              EdX Skills Bootcamp in Front-End Web Development
            </Link>{" "}
            who decided to pivot in their careers and gain new knowledge in the
            field of Web Development.
          </p>
          <p>
            At the{" "}
            <HeartFill className="heart-icon" size={16} />{" "}
            of the initiative to create{" "}
            <Link className="as-link" to="https://github.com/nyitrai87/answersphere" target="_blank">
              AnswerSphere
            </Link>{" "}
            lies a dynamic blend of ambition and curiosity. It was more than
            just crafting a digital solution: it was an opportunity to showcase
            our skills in development, to discover the power of creativity,
            teamwork and innovation.
          </p>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={Rowan}
                roundedCircle
                className="img-thumbnail smaller-avatar"
              />
              <p className="mt-2">
                Rowan Kinross{" "}
                <a
                  href="https://github.com/RowanKinross"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github size={24} className="ms-1 gh-logo" />
                </a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={Adam}
                roundedCircle
                className="img-thumbnail smaller-avatar"
              />
              <p className="mt-2">
                Adam Nyitrai{" "}
                <a
                  href="https://github.com/nyitrai87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github size={24} className="ms-1 gh-logo" />
                </a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                className="img-thumbnail smaller-avatar"
              />
              <p className="mt-2">
                Isabel Solana{" "}
                <a
                  href="https://github.com/Joeviser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github size={24} className="ms-1 gh-logo" />
                </a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={Ioana}
                roundedCircle
                className="img-thumbnail smaller-avatar"
              />
              <p className="mt-2">
                Ioana Iosub{" "}
                <a
                  href="https://github.com/IIosub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github size={24} className="ms-1 gh-logo" />
                </a>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={Anna}
                roundedCircle
                className="img-thumbnail smaller-avatar"
              />
              <p className="mt-2">
                Anna Chernova{" "}
                <a
                  href="https://github.com/Anna702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github size={24} className="ms-1 gh-logo" />
                </a>
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="contact-container">
          <h3>Contact Us</h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="text-start mb-3">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address here..."
              />
            </Form.Group>
            <Form.Group className="text-start mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name here..."
              />
            </Form.Group>
            <Form.Group className="text-start mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message here..."
                rows={5}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleShow}
              className="roboto-bold custom-btn send-btn"
            >
              Send{" "}
              <EnvelopeFill className="envelope-icon" />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Your message has been sent!</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="close-btn"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
