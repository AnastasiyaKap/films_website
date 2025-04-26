import React from "react";
import SingleCard from "./SingleCard";

function Cartoons({ cartoons }) {
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
