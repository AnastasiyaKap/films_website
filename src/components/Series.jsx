import React from "react";
import SingleCard from "./SingleCard";

function Series({ series }) {
  return (
    <>
      <div className="cards">
        {series.map((serial) => (
          <SingleCard props={serial} key={serial.id} flag />
        ))}
      </div>
    </>
  );
}

export default Series;
