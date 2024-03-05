import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import dayjs from "dayjs";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AnswerPage() {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const db = firebase.firestore();
        const snapshot = await db
          .collection("answers")
          .where("userId", "==", currentUser.uid)
          .get();
        const fetchedData = snapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      };

      fetchData();
    }
  }, [currentUser]);

  return (
    <>
      <div>
        <h1 className="text-center">Answers</h1>

        <Row xs={1} sm={2} md={3} className="g-4">
          {data.map((item, i) => (
            <Col key={i}>
              <Card
                className="h-100"
                style={{ minWidth: "180px", border: "2px solid #547258" }}
              >
                <Card.Body>
                  {<Card.Text
                    style={{
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#547258",
                      borderRadius: "15px",
                    }}
                  >
                    {dayjs(item.timestamp.toDate()).format("DD/MM/YYYY")}
                  </Card.Text>}
                  <Card.Text>{item.question}</Card.Text>
                  <Card.Text>{item.answer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default AnswerPage;
