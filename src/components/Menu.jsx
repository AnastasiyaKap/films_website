import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="films">Films</NavLink>
      <NavLink to="series">Series</NavLink>
      <NavLink to="cartoons">Cartoons</NavLink>
    </nav>
  );
}

export default Menu;
