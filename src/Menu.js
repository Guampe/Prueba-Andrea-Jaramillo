import React from "react";
import "./Menu.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__izquierda">
        <div className="menu__input">
          <SearchIcon />
          <input placeholder="Qué quieres aprender hoy?" type="text" />
        </div>
      </div>
      <div className="menu__derecha">
        <Avatar />
        <h4>Estudiante</h4>
      </div>
    </div>
  );
}

export default Menu;
