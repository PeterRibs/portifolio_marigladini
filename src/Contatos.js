import React, { useRef } from "react";
import "./Contatos.css";
import emailjs from '@emailjs/browser';

const Contatos = () =>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21j26ao', 'template_kcsveuh', form.current, 'user_wrzHPJxbNkuYXpj9bYFRp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    form.current.reset();
    
  };

  return (
    <div className="container container-contatos">
      <div className="contatos-texto">
        <h2>Mariana Gladini</h2>
        <p>Telefone: (61) 99845-0030</p>
        <p>E-mail: marianagladini@gmail.com</p>
      </div>
      <form name="myForm" ref={form} onSubmit={sendEmail} className="contatos-form">
        <input type="text" name="user_name" id="nome" placeholder="Nome"/>
        <input type="email" name="user_email" id="email" placeholder="E-mail"/>
        <textarea name="message" id="msg" placeholder="Mensagem"></textarea>
        <button type="submit" className="form-submit-btn" value="Send">Mandar!</button>
      </form>
    </div>
  )
}

export default Contatos;