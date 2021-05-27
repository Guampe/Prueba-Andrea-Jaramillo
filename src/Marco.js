import React from "react";
import "./Marco.css";
import MarcoIm from "./imagenes/marco.png";
import AcaIm from "./imagenes/acaTermina.png";
import AunIm from "./imagenes/aunFalta.png";
import ExploIm from "./imagenes/explo.png";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Marco() {
  return (
    <Grid container>
      <div className="marco">
        <img src={MarcoIm} alt="marcoIm" className="marcoIm" />
        <Link to="/PageDos">
          <img src={AcaIm} alt="" className="acaIm" />
        </Link>
        <Link to="/PageDos">
          <img src={AunIm} alt="" className="aunIm" />
        </Link>
        <Link to="/PageDos">
          <img src={ExploIm} alt="" className="exploIm" />
        </Link>
      </div>
    </Grid>
  );
}

export default Marco;
