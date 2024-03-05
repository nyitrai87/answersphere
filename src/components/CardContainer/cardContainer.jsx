
import Card from "react-bootstrap/Card";

function cardContainer({ search }) {
  return (
    <>
    <Card style={{ width: "24rem" }}>
    <Card.Body>

      {/* Input the DATE */}
      <Card.Title>{search.title}</Card.Title>

        {/* // for the question */}
      {/* Margin between questions and it answer */}
      <div style={{ marginBottom: "15px" }}> 
        <Card.Text>{search.questions}</Card.Text>
      </div>

     {/* // for the answer */}
      {/* Margin between asnwer and the card bottom */}
      <div style={{ marginBottom: "15px" }}> 
         <Card.Text>{search.answers}</Card.Text>
      </div>
     
    </Card.Body>
  </Card>
  </>
  );
}

export default cardContainer;