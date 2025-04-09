import React from 'react';
import SingleCard from './SingleCard';
import cartoons from '../data/cartoons';

function Cartoons() {
  return (
    <>
      <div className="cards">
        {cartoons.map((cartoon) => (
          <SingleCard props={cartoon} key={cartoon.id} />
        ))}
      </div>
    </>
  );
}

export default Cartoons;
