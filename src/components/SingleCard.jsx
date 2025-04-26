import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styles from "./styles/SingleCard.module.css";

function SingleCard({ props }) {
  const { title, slug, image } = props;
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} className={styles.image} />
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Button variant="primary" className={styles.button}>
          <Link to={slug} className={styles.link}>
            More information{" "}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
