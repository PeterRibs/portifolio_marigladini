import React from "react";
import Card from "./Card.js";
import "./CardList.css";
import TextoList from "./Textos";

const CardList = () => {
  return(
    <div className="container cardList-container">
      {
        TextoList.map((cadaTxt, i) => {
          return (
            <Card 
              key={i}
              titulo = {TextoList[i].titulo}
              data = {TextoList[i].data}
              texto = {TextoList[i].texto}
              imagem = {TextoList[i].imagem}
            />
          )
        })
      }
    </div>
  )
}

export default CardList;