import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function PageDos() {
  return (
    <div>
      <Menu />

      <h1>Página en Blanco para prueba de Rutas</h1>
      <br />
      <Button variant="contained" color="primary" component={Link} to="/">
        Click aquí para volver a la Página Principal
      </Button>
    </div>
  );
}

export default PageDos;
