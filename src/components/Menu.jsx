import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="." end>
        Главная
      </NavLink>
      <NavLink to="films">Фильмы</NavLink>
      <NavLink to="series">Сериалы</NavLink>
      <NavLink to="cartoons">Мультики</NavLink>
      <NavLink to="add-new">Добавить новое</NavLink>
    </nav>
  );
}

export default Menu;
