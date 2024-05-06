import "./singleBook.css";
import { Col, Card, CardBody } from "react-bootstrap";

const SingleBook = ({ asin, title, img, price, category }) => {
  return (
    <Col>
      <Card className="card-container mb-4">
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Img className="card-img" src={img} alt={title} />
        <CardBody>
          <Card.Text>
            <p className="m-0">Genre: {category}</p>
            <p className="m-0">ASIN code: {asin}</p>
            <p className="m-0 text-end">Price: {price} $</p>
          </Card.Text>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SingleBook;
