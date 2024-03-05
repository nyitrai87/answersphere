import { useState, useEffect } from 'react';
import { useAuth } from "../../contexts/authContext";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import dayjs from "dayjs";
const Today = dayjs().format("DD/MM/YYYY");
import Container from "react-bootstrap/Container";

function AnswerPage() {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const db = firebase.firestore();
        const snapshot = await db.collection('answers')
          .where('userId', '==', currentUser.uid)
          .get();
        const fetchedData = snapshot.docs.map(doc => doc.data());
        setData(fetchedData);
      };

      fetchData();
    }
  }, [currentUser]);

  return (
    <>
      <Container>
        <div className="AnswerPage">
          <p>{Today}</p>
          <h2>Questions and Answers</h2>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <p><strong>Question:</strong> {item.question}</p>
                <p><strong>Answer:</strong> {item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}

export default AnswerPage;
