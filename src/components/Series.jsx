import React from 'react';
import SingleCard from './SingleCard';
import series from '../data/series';

function Series() {
  return (
    <>
      <div className="cards">
        {series.map((serial) => (
          <SingleCard props={serial} key={serial.id} />
        ))}
      </div>
    </>
  );
}

export default Series;
