import { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import emailjs from "@emailjs/browser";
import { EnvelopeFill, HeartFill, Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import logo from "../../../public/images/logoBagel.png";
import Anna from "../../../public/images/Anna-avatar.png";
import "./styles.css";

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
      <Container className="mt-5">
        <h2 style={{ marginBottom: "0" }}>About Us</h2>
        <Container className="about-us mt-5" style={{ textAlign: "justify" }}>
          <p>
            <span style={{ fontWeight: "bold", color: "#3BA1C8" }}>
              <a
                href="https://github.com/nyitrai87/answersphere"
                style={{ color: "#3BA1C8", textDecoration: "none" }}
              >
                AnswerSphere
              </a>
            </span>{" "}
            was created by 5 international students of the{" "}
            <Link
              to="https://www.edx.org/boot-camps/coding/skills-bootcamp-in-front-end-web-development"
              style={{
                color: "#FB5543",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              EdX Skills Bootcamp in Front-End Web Development
            </Link>{" "}
            who decided to pivot in their careers and gain new knowledge in the
            field of Web Development.
          </p>
          <p>
            At the{" "}
            <HeartFill
              size={16}
              style={{ verticalAlign: "middle", color: "#3BA1C8" }}
            />{" "}
            of the initiative to create{" "}
            <span style={{ fontWeight: "bold", color: "#3BA1C8" }}>
              <a
                href="https://github.com/nyitrai87/answersphere"
                style={{ color: "#3BA1C8", textDecoration: "none" }}
              >
                AnswerSphere
              </a>
            </span>{" "}
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
                src={logo}
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
                  <Github
                    size={24}
                    style={{ color: "black", marginBottom: "3px" }}
                    className="ms-1"
                  />
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
                Adam Nyitrai{" "}
                <a
                  href="https://github.com/nyitrai87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github
                    size={24}
                    style={{ color: "black", marginBottom: "3px" }}
                    className="ms-1"
                  />
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
                  <Github
                    size={24}
                    style={{ color: "black", marginBottom: "3px" }}
                    className="ms-1"
                  />
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
                Ioana Iosub{" "}
                <a
                  href="https://github.com/IIosub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Github
                    size={24}
                    style={{ color: "black", marginBottom: "3px" }}
                    className="ms-1"
                  />
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
                  <Github
                    size={24}
                    style={{ color: "black", marginBottom: "3px" }}
                    className="ms-1"
                  />
                </a>
              </p>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "#F5F5F5",
          }}
        >
          <h3 style={{ marginTop: "10px", marginBottom: "20px" }}>
            Contact Us
          </h3>
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
              className="roboto-bold"
              style={{
                backgroundColor: "#3BA1C8",
                padding: "10px 22px",
                marginTop: "20px",
                color: "white",
                border: "none",
                borderRadius: "20px",
              }}
            >
              Send{" "}
              <EnvelopeFill
                style={{ marginLeft: "5px", marginBottom: "3px" }}
              />
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
