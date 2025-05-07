import React from "react";
import SingleCard from "./SingleCard";

function Films({ films }) {
  return (
    <div className="cards">
      {films.map((film) => (
        <SingleCard props={film} key={film.id} flag />
      ))}
    </div>
  );
}

export default Films;
