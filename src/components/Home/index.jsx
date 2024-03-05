import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { Card, Button, Form, Container } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import OpenAI from "openai";
import "./index.css";

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
            <option value="decide">Decide: Yes or No</option>
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
        className="roboto-bold custom-btn ask-btn custom-btn"
      >
        Ask the Universe
      </Button>
    </Form>
  );
}

function Home() {
  const { currentUser } = useAuth();
  const [answer, setAnswer] = useState();
  const [chat, setChat] = useState();

  async function storeQandAinFirestore(userId, question, answerContent) {
    if (!userId || !answerContent) {
      console.error("User ID or answer content is undefined or null");
      return;
    }

    const db = firebase.firestore();
    try {
      // Add a new document to the 'answers' collection
      const answerDocRef = await db.collection("answers").add({
        userId: userId,
        answer: answerContent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Answer stored with ID: ", answerDocRef.id);

      // Add a new document to the 'questions' collection
      const questionDocRef = await db.collection("questions").add({
        userId: userId,
        question: question,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Question stored with ID: ", questionDocRef.id);
    } catch (error) {
      console.error("Error adding question and answer:", error);
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    let aiTask;
    switch (formValues.need) {
      case "question":
        aiTask =
          "Answer to the user question with a response of a paragraph containing at max 100 words.";
        break;
      case "advice":
        aiTask =
          "You should give some advice to the user with a response of a paragraph containing at max 100 words.";
        break;
      case "inspiration":
        aiTask =
          "You should be an inspirational ai and respond with a paragraph containing at max 100 words.";
        break;
      case "affirmation":
        aiTask =
          "Be a positive an affirmative ai and respond with a paragraph containing at max 100 words";
        break;
      case "surprise":
        aiTask =
          "You should tell the user something unexpected with a response of a paragraph containing at max 100 words.";
        break;
      case "decide":
        aiTask = "You can answer only with an yes or no.";
        break;
      default:
        break;
    }

    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "system", content: aiTask },
      {
        role: "user",
        content: formValues.text,
        name: formValues.name,
      },
    ];

    const chatCompletion = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });

    setAnswer(chatCompletion.choices[0].message.content);
    setChat([...messages, chatCompletion.choices[0].message]);

    storeQandAinFirestore(
      currentUser?.uid,
      formValues.text,
      chatCompletion.choices[0].message.content
    );
  }

  async function retryQuestion() {
    const messages = [
      ...chat,
      {
        role: "user",
        content:
          "give me an alternative response to my previous question, I didn't like your response",
      },
    ];

    const chatCompletion = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });

    setAnswer(chatCompletion.choices[0].message.content);
    setChat([...messages, chatCompletion.choices[0].message]);
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

              <Button
                className="retry custom-btn"
                onClick={() => retryQuestion()}
              >
                Retry
              </Button>

              <Button
                className="new-question custom-btn"
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
