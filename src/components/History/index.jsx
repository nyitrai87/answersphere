import { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import dayjs from "dayjs";
import { useAuth } from "../../contexts/authContext";
import "./index.css";

function History() {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        try {
          const db = firebase.firestore();
          const snapshot = await db
            .collection("answers")
            .where("userId", "==", currentUser.uid)
            .orderBy("timestamp", "desc") // Sort by timestamp in descending order
            .get();
          const fetchedData = snapshot.docs.map((doc) => doc.data());
          console.log("Fetched Data:", fetchedData); // Check fetched data
          setData(fetchedData);
        } catch (error) {
          console.error("Error fetching data:", error); // Log any errors
        }
      };

      fetchData();

      // Get username from currentUser
      setUserName(currentUser.displayName || "Wisdom Seeker");
    }
  }, [currentUser]);

  return (
    <>
      <div>
        <h1 className="text-center">History</h1>
        <Container className="history-container p-3 rounded-3">
          <Row xs={1} sm={2} md={3} className="g-4">
            {data.map((item, i) => (
              <Col key={i} md={6} lg={4}>
                <Card className="h-100 history-card">
                  <Card.Body className="rounded-3">
                    {
                      <Card.Text className="rounded-3 card-date">
                        {dayjs(item.timestamp.toDate()).format("DD/MM/YYYY")}
                      </Card.Text>
                    }
                    <div className="question-div">
                      <span className="sender">
                        {currentUser.displayName
                          ? currentUser.displayName
                          : "Me"}
                      </span>
                      <Card.Text className="question-text rounded-4">
                        {item.question}
                      </Card.Text>
                    </div><br />
                    <div className="answer-div">
                      <span className="sender">Universe</span>
                      <Card.Text className="answer-text rounded-4">
                        {item.answer}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default History;
