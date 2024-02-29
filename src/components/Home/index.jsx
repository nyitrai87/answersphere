import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import "./index.css";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

function Home() {
  //Handle form
  async function handleFormSubmit(e) {
    e.preventDefault();
    //User input values
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Hi, my name is ${formValues.name}.\n I would like to ${formValues.need}.\n${formValues}\n Please could you respond with only a paragraph containing at max 100 words.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
    console.log(formValues);
  }

  return (
    <>
      <Container className="mt-5">
        <Card className="py-4" style={{ backgroundColor: "#3BA1C8" }}>
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

        <Container style={{ backgroundColor: "#F5F5F5", marginTop: "20px" }}>
          <Form className="py-5" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Control
                  type="text"
                  placeholder="What is your name?"
                  name="name"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Select
                  className="w-100"
                  aria-label="Select what you need from the universe today"
                  name="need"
                >
                  <option value={null} disabled selected>
                    What do you need today?
                  </option>
                  <option>Ask a question</option>
                  <option>Get advice</option>
                  <option>Find inspiration</option>
                  <option>Daily affirmation</option>
                  <option>Surprise me</option>
                  <option>Decide: Yes or No</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 row">
              <div className="col-12 col-lg-9">
                <Form.Control
                  type="text"
                  placeholder="Share what's on your mind..."
                  name="text"
                />
              </div>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
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
              Ask the Universe
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Home;
