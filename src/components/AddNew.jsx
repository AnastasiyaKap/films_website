import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Form.module.css";

const AddNew = ({
  films,
  cartoons,
  series,
  setFilms,
  setCartoons,
  setSeries,
}) => {
  const [type, setType] = useState("films");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.ceil(Math.random() * 1000),
      title,
      slug,
      image,
    };

    switch (type) {
      case "films":
        setFilms([...films, newItem]);
        break;
      case "cartoons":
        setCartoons([...cartoons, newItem]);
        break;
      case "series":
        setSeries([...series, newItem]);
        break;
      default:
        break;
    }
    setTitle("");
    setSlug("");
    setImgUrl("");
  };

  return (
    <div className={styles.divForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Тип:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="films">Фильм</option>
            <option value="cartoons">Мультики</option>
            <option value="series">Сериалы</option>
          </select>
        </label>
        <br />
        <label className={styles.label}>
          Название:
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label className={styles.label}>
          Слаг:
          <input
            className={styles.input}
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          ></input>
        </label>
        <label className={styles.label}>
          Ссылка на изображение:
          <input
            className={styles.input}
            type="text"
            value={image}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </label>
        <button type="submit" className={styles.button}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddNew;
