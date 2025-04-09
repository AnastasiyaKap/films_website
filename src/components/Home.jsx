import React, { useEffect, useState } from 'react';
// import './App.css'; // Подключаем стили
import big_lies from '../data/big_lies';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [
              ...new Set([...prev, entry.target.dataset.id]),
            ]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('.section')
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {big_lies.map((section) => (
        <div
          key={section.id}
          data-id={section.id}
          className={`section ${
            visibleSections.includes(section.id.toString()) ? 'visible' : ''
          }`}
          style={{ backgroundImage: `url(${section.img})` }}
        >
          <div className="text">{section.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
