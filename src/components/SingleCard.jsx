import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styles from "./styles/SingleCard.module.css";

function SingleCard({ props, flag, onClick }) {
  const { title, slug, image } = props;

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <p className={styles.title}>{title}</p>
        <Button
          variant="primary"
          className={styles.button}
          onClick={!flag ? onClick : undefined}
        >
          {flag ? (
            <Link to={slug} className={styles.link}>
              Подробнее
            </Link>
          ) : (
            <p className={styles.p}>Удалить</p>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
