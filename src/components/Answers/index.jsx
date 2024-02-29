import dayjs from "dayjs";
const Today = dayjs().format("DD/MM/YYYY");
import Container from "react-bootstrap/Container";

function AnswerPage() {
  return (
    <>
      <Container className="mt-5">
        <div className="AnswerPage">
          <p>{Today}</p>
          <h2>Answers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            reiciendis cupiditate quam consectetur velit libero minima, in quo,
            veniam ipsam sapiente dolorem similique omnis ratione. Eum
            consequuntur assumenda eaque et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id atque obcaecati saepe recusandae
            quasi delectus beatae, natus exercitationem aspernatur molestias
            neque reiciendis sed magnam ipsam iusto iure voluptatibus
            consectetur sequi.
          </p>
        </div>
      </Container>
    </>
  );
}

export default AnswerPage;
