import dayjs from "dayjs";
const Today = dayjs().format("DD/MM/YYYY");
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardContainer from "../CardContainer/cardContainer.jsx";

function AnswerPage = () => {
  return (
    <>
      
        
        <div className="AnswerPage">
          <p>{Today}</p>
        <div>

        <h1 className="text-center">Answers</h1>

        <Row xs={1} sm={2} md={3} className="g-4">
          {/* //loop the object with the question/answers  */}
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className="h-100"
                style={{ minWidth: "180px", border: "2px solid #547258" }}
              >
                <Card.Body>
                  <Card.Date
                    style={{
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#547258",
                      borderRadius: "15px",
                    }}
                  >
                    {search.date}
                  </Card.Date>


                  <Card.Text>{search.questions}</Card.Text>
                  <Card.Text>{search.answers}</Card.Text>


                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     
    </>
  );
}

export default AnswerPage;
