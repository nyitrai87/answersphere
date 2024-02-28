import { useState, useEffect } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";
import { Navbar, Container, Row, Col } from "react-bootstrap";

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
      <div style={{ height: "50px" }}></div>

      <Navbar
        fixed="bottom"
        style={{ backgroundColor: "white", color: "black" }}
        variant="light"
      >
        <Container>
          <Row className="justify-content-end">
            <Col xs="auto" style={{ marginLeft: "20px" }}>
              <ArrowUpCircle
                size={24}
                onClick={scrollToTop}
                style={{ display: showButton ? "block" : "none" }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Navbar.Text
                style={{ fontSize: "smaller", color: "black" }}
                className="text-center"
              >
                © 2024 Created with support from EdX
              </Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
