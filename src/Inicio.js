import React from "react";
import "./Inicio.css";
import mari from "./Figs/imagem_mari.jpeg";

const Inicio = ({ onRouteChange, aba }) =>{
  return(
    <div className="container container-2">
      <div className="inicio-imagem-container">
        <img className = "imagem-inicio" src = {mari}/>
      </div>
      <div className="inicio-texto-container">
        <div className="inicio-texto">
          <h2>Mariana Gladini</h2>
          <p>Olá! Meu nome é Mariana Gladini e sou uma Copywriter freelancer.
          <br></br>   
          <br></br>
          Gosto muito de escrever, e descobri isso contando, de maneira leve e agradável, acontecimentos do meu cotidiano. No entanto, hoje trabalho com redação de conteúdos a serviço do marketing e vendas, além de criação de landing pages e conteúdo para redes sociais. 
          </p>
        </div>
        <div className="
        buttons">
          <button onClick = {()=> onRouteChange('contatoRoute')} className="btn">Vamos conversar?</button>
          <button onClick = {()=> onRouteChange('producaoRoute')} className="btn">Quer saber mais sobre meu trabalho?</button>
          <button onClick = {()=> onRouteChange('destraveRoute')} className="btn">Destrave seu TCC</button>
        </div>
      </div>
    </div>
  )
}

export default Inicio;