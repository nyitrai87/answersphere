import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function Home() {
  return (
    <>
    <Card className='py-5'>
      <Card.Body>
        <Card.Text>
            In a world inundated with questions and uncertainties,
            Answer Sphere emerges as a beacon of clarity and
            guidance. 
            Our app offers users a unique opportunity to embark on
            a journey of self-discovery by providing personalized
            insights sourced from a diverse array of inspirations.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>
            Fill out the form below to find the answer you've been looking for.
        </Card.Text>
      </Card.Body>
    </Card>

<Container>
  <Form className='py-5'>

    <Form.Group className="mb-3 row">
      <Form.Label className="col-sm-12 col-lg-3">Your name:</Form.Label>
      <div className="col-sm-12 col-lg-9">
        <Form.Control type="username" placeholder="name"/>
      </div>
    </Form.Group>

    <Form.Group className="mb-3 row">
      <Form.Label className="col-sm-12 col-lg-3">What kind of help would you like?</Form.Label>
      <div className="col-sm-12 col-lg-9"> 
        <Form.Select>
          <option value="1">To ask a question</option>
          <option value="2">To recieve some advice</option>
          <option value="3">Some inspiration</option>
          <option value="4">Surprise me</option>
        </Form.Select>
      </div>
    </Form.Group>

    <Form.Group className="mb-3 row">
      <Form.Label className="col-sm-12 col-lg-3">What would you like to focus on today?</Form.Label>
      <div  className="col-sm-12 col-lg-9">
      <Form.Control type="focus" placeholder="e.g family, home-life, work-life, healthy habits"/>
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