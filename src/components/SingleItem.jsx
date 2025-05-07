import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "./styles/SingleItem.module.css";

const SingleItem = ({ items, setButton }) => {
  const params = useParams();
  const navigate = useNavigate();

  const result = items.find((item) => item.slug === params.slug);
  useEffect(() => {
    if (!result) {
      navigate("..", { relative: "path" });
    }
  }, [result, navigate]);

  return (
    <div className={styles.cards}>
      <div className={styles.image}>
        <img src={result.image} className={styles.img} alt={result.title} />
      </div>
      <div className={styles.infoBlock}>
        <h2 style={{ textAlign: "center" }}>{result.title}</h2>
        <button className={styles.button} onClick={() => setButton(result)}>
          Добавить в избранное
        </button>
        <Link to=".." relative="path" className={styles.link}>
          {" "}
          Назад
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
