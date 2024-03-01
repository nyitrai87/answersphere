import { Container, Row, Col } from "react-bootstrap";
import bagel from "/images/logoBagel.png";
import "./index.css";

function AboutApp() {
  return (
    <>
      <Container className="my-5 aboutApp">
        <Row>
          <Col>
            <p className="roboto-bold welcomeP">
              Welcome to{" "}
              <a
                href="https://github.com/nyitrai87/answersphere"
                target="_blank"
                className="appName"
              >
                AnswerSphere
              </a>
              !
            </p>
            <div className="appDesigned">
              <p className="roboto-regular">
                Our application is designed for those seeking answers to their
                questions, seeking advice, daily affirmations, or resolving
                "yes" or "no" dilemmas. It's a magical pendulum for those
                awaiting signs from above – and indeed, it's the sign itself.
              </p>
            </div>
            <p className="roboto-bold twoOptions">Users have two options:</p>
            <ul className="roboto-regular">
              <li>
                <strong>Guest Access:</strong> Log in as a guest to access basic
                app features. You can pose a question to the universe and
                receive an answer.
              </li>
              <li>
                <strong>User Authentication:</strong> Authenticate as a
                registered user to unlock advanced features. This includes the
                ability to save all your answers on a separate page for easy
                access anytime. (Guest responses are not saved.)
              </li>
            </ul>
          </Col>{" "}
          <div className="bagelGroup">
            <p>
              Our logo is a <strong>colorful bagel</strong>, which carries
              symbolic significance from various legends and beliefs. In many
              cultures, the bagel is considered a symbol of unity, completeness,
              and the cycle of life. It is often associated with good fortune,
              abundance, and protection from harm. Some legends even suggest
              that the shape of the bagel represents the infinite possibilities
              and interconnectedness of the Universe.
            </p>
            <div className="bagel-container">
              <img src={bagel} alt="Bagel Image" className="bagelImg" />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default AboutApp;
