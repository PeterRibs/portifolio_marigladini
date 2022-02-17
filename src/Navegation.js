import React from "react";
import "./Navegation.css";

const Navegation = ({onRouteChange, aba }) => {
  return(
    <nav className="main-nav">
      <button onClick={ () => onRouteChange('inicio')} className="inicio_btn">Início</button>
    </nav>
  )
}

export default Navegation;
