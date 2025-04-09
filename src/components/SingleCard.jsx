import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SingleCard({ props }) {
  const { title, slug, image } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">
          <Link to={slug}>More information</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
