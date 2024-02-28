import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

function Home() {
  return (
    <>
      <Card className="py-5">
        <Card.Body>
          <Card.Text>
            In a world inundated with questions and uncertainties, Answer Sphere
            emerges as a beacon of clarity and guidance. Our app offers users a
            unique opportunity to embark on a journey of self-discovery by
            providing personalized insights sourced from a diverse array of
            inspirations.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            Fill out the form below to find the answer you've been looking for.
          </Card.Text>
        </Card.Body>
      </Card>

      <Container>
        <Form className="py-5">
          <Form.Group className="mb-3 row">
            <div className="col-sm-12 col-lg-9">
              <Form.Control type="username" placeholder="What is your name?" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3 row">
            <div className="col-sm-12 col-lg-3"></div>
            <div className="col-sm-12 col-lg-9">
              <Form.Select
                className="w-100"
                aria-label="Select what you need from the universe today"
              >
                <option value="" disabled selected>
                  What do you need from the Universe today?
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
            <div className="col-sm-12 col-lg-9">
              <Form.Control
                type="focus"
                placeholder="Share what's on your mind..."
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Ask the universe
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
