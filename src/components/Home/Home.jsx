import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import "./styles.css";

function Home() {
  return (
    <>
      <Container className="mt-5">
        <Card className="py-5" style={{ backgroundColor: "#3BA1C8" }}>
          <Card.Body>
            <Card.Text
              className="roboto-bold"
              style={{ color: "white", fontSize: "62px" }}
            >
              Ask the Universe,
              <br /> Receive its Wisdom
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text
              className="roboto-bold"
              style={{ color: "white", fontSize: "22px" }}
            >
              Fill in all fields and receive what you seek - it is also looking
              for you!
            </Card.Text>
          </Card.Body>
        </Card>

        <Container>
          <Form className="py-5">
            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Control
                  type="username"
                  placeholder="What is your name?"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Select
                  className="w-100"
                  aria-label="Select what you need from the universe today"
                >
                  <option value="" disabled selected>
                    What do you need today?
                  </option>
                  <option value="1">Ask a question</option>
                  <option value="2">Get advice</option>
                  <option value="3">Find inspiration</option>
                  <option value="4">Daily affirmation</option>
                  <option value="5">Surprise me</option>
                  <option value="6">Decide: Yes or No</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Control
                  type="focus"
                  placeholder="Share what's on your mind..."
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Ask the Universe
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Home;
