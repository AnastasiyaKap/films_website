import Figure from "react-bootstrap/Figure";
import styles from "./styles/Home.module.css";

const AllItems = ({ films, series, cartoons }) => {
  return (
    <>
      {series.map((item, itemIndex) => (
        <Figure key={itemIndex}>
          <Figure.Image
            alt={itemIndex}
            src={item.image}
            className={styles.imgFigure}
          />
          <Figure.Caption className={styles.caption}>
            {item.title}
          </Figure.Caption>
        </Figure>
      ))}
      {cartoons.map((value, valueIndex) => (
        <Figure key={valueIndex}>
          <Figure.Image
            alt={valueIndex}
            src={value.image}
            className={styles.imgFigure}
          />
          <Figure.Caption className={styles.caption}>
            {value.title}
          </Figure.Caption>
        </Figure>
      ))}

      {films.map((value, valueIndex) => (
        <Figure key={valueIndex}>
          <Figure.Image
            alt={valueIndex}
            src={value.image}
            className={styles.imgFigure}
          />
          <Figure.Caption className={styles.caption}>
            {value.title}
          </Figure.Caption>
        </Figure>
      ))}
    </>
  );
};

export default AllItems;
