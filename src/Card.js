import React from "react";
import "./Card.css";

const Card = ({ titulo, data, texto, imagem }) =>{
  return (
    <div className="card-container">
        <img className="imagem-texto" src = {imagem} alt="figura"/>
        <div className="texto">
          <h2>{titulo}</h2>
          <p>{texto}</p>
        </div> 
    </div>
  )
} 

export default Card;