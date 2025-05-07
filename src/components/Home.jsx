import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import popular from "../data/popular";
import AllItems from "./AllItems";
import styles from "./styles/Home.module.css";

const Home = ({ films, series, cartoons }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className={styles.carousel}>
        <h3 className={styles.homeH1}>Популярное</h3>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {popular.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div
                className={`d-flex justify-content-center ${styles.carouselDiv}`}
              >
                {slide.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${slideIndex} is ${imgIndex}`}
                    className={`d-block ${styles.imgCarousel}`}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={styles.allItems}>
        <AllItems films={films} series={series} cartoons={cartoons} />
      </div>
    </>
  );
};

export default Home;
