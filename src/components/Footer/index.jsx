import { useState, useEffect } from "react";
import { ArrowUpCircle, HeartFill, Github } from "react-bootstrap-icons";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "./index.css";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className="footer" fixed="bottom">
        <Container>
          <Row>
            <Col>
              <Navbar.Text>
                <a
                  href="https://github.com/nyitrai87/answersphere"
                  target="_blank"
                  className="github-link"
                >
                  <Github
                    className="github-icon"
                    size={22}
                    style={{ color: "black" }}
                  />
                </a>{" "}
                © 2024 Created with{" "}
                <HeartFill className="heart-icon" size={16} />
                {" and "}
                <a href="https://skillsforlife.edx.org" target="_blank">
                  EdX
                </a>
                {" support."}
              </Navbar.Text>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <ArrowUpCircle
                size={22}
                onClick={scrollToTop}
                style={{
                  color: "#3BA1C8",
                  display: showButton ? "block" : "none",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
