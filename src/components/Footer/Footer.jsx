import { useState, useEffect } from "react";
import { ArrowUpCircle, HeartFill } from "react-bootstrap-icons";
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
      <Navbar
        fixed="bottom"
        style={{
          height: "100px",
          backgroundColor: "#F5F5F5",
          color: "black",
          padding: "10px",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Navbar.Text
                style={{ fontSize: "smaller", color: "black" }}
                className="text-center"
              >
                © 2024 Created with{" "}
                <HeartFill
                  size={16}
                  style={{ verticalAlign: "middle", color: "#3BA1C8" }}
                />{" "}
                and{" "}
                <a
                  href="https://skillsforlife.edx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EdX
                </a>{" "}
                support.
              </Navbar.Text>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs="auto" style={{ marginLeft: "20px" }}>
              <ArrowUpCircle
                size={22}
                onClick={scrollToTop}
                style={{ color: "#3BA1C8", display: showButton ? "block" : "none" }}
              />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
