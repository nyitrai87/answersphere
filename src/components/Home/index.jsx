import { Card, Button, Form, Container } from "react-bootstrap";
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
      <Container>
        <Card className="py-4 jumbotron">
          <Card.Body>
            <Card.Text className="roboto-bold jumbo-txt-lg">
              Ask the Universe,
              <br /> Receive its Wisdom
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text className="roboto-bold jumbo-txt-sm">
              Fill in all fields and receive what you seek - it is also looking
              for you!
            </Card.Text>
          </Card.Body>
        </Card>

        <Container className="ask-container">
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
                  <option>
                    What do you need today?
                  </option>
                  <option value="question">Ask a question</option>
                  <option value="advice">Get advice</option>
                  <option value="inspiration">Find inspiration</option>
                  <option value="affirmation">Daily affirmation</option>
                  <option value="surprise">Surprise me</option>
                  <option value="ask">Decide: Yes or No</option>
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
              className="roboto-bold custom-btn ask-btn"
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
