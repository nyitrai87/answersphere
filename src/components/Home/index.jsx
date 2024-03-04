import { Card, Button, Form, Container } from "react-bootstrap";
import "./index.css";
import { useAuth } from "../../contexts/authContext";
import { addQuestionToFirebase } from "../../firebase/firebase";

import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

function QuestionForm({ onSubmit }) {
  return (
    <Form className="py-5" onSubmit={onSubmit}>
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
            <option>What do you need today?</option>
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
  );
}

function Home() {
  const currentUser = useAuth();
  console.log(currentUser);
  const [answer, setAnswer] = useState();
  // const [need, setNeed] = useState();
  // const [text, setText] = useState();

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Hi, my name is ${formValues.name}.\n I would like to ${formValues.need}.\n${formValues.text}\n Please could you respond with only a paragraph containing at max 100 words.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    setAnswer(chatCompletion.choices[0].message.content);

    if (!currentUser) {
      //checking to see if a user is logged in
      return;
    }
    try {
      await addQuestionToFirebase(currentUser.uid, answer);
      alert("question saved successfully");
    } catch (error) {
      console.error("error saving question", error);
    }
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
          {answer ? (
            <>
              {/* <div>{answer}</div> */}

              <div className="response">
                <strong>Answer</strong>
                <br></br>
                {answer}
              </div>

              <Button className="retry">Retry</Button>

              <Button
                className="new-question"
                onClick={() => setAnswer(undefined)}
              >
                New question
              </Button>
            </>
          ) : (
            <QuestionForm onSubmit={handleFormSubmit} />
          )}
        </Container>
      </Container>
    </>
  );
}

export default Home;
