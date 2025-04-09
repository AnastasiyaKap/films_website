import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles/SingleSeries.module.css';

function SingleSeries({ items, elements }) {
  const params = useParams();
  const navigate = useNavigate();
  const item = items?.find((it) => it.slug === params.slug);

  const [visibleBlocks, setVisibleBlocks] = useState([]);

  useEffect(() => {
    if (!item) {
      navigate('..', { relative: 'path' });
    }
  }, [item, navigate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('[data-id]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!item) return null;

  return (
    <>
      {elements.map((element, index) => {
        const isVisible = visibleBlocks.includes(index.toString());
        const isEven = index % 2 === 0;

        return (
          <div key={index} data-id={index} className={styles.information_block}>
            {isEven ? (
              <>
                <div
                  className={`${styles.image} ${
                    isVisible ? styles.visibleLeft : ''
                  }`}
                  style={{ backgroundImage: `url(${element.image})` }}
                />
                <div
                  className={`${styles.text} ${
                    isVisible ? styles.visibleRight : ''
                  }`}
                >
                  <h2>{element.name}</h2>
                  <p>{element.text}</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${styles.text} ${
                    isVisible ? styles.visibleLeft : ''
                  }`}
                >
                  <h2>{element.name}</h2>
                  <p>{element.text}</p>
                </div>
                <div
                  className={`${styles.image} ${
                    isVisible ? styles.visibleRight : ''
                  }`}
                  style={{ backgroundImage: `url(${element.image})` }}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default SingleSeries;
