import React from 'react';

import FnmnLogoNegro from '../assets/fnmnlogonegro.png';
import './Modal2.css';

const Modal2 = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div class="primerdiv">
          <img className="fnmnlogonegro" src={FnmnLogoNegro}></img>
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
        </div>
        <div className="title">
          <h1>Boletín!</h1>
          <p>
            Para updates, noticias, mercadería, eventos y cualquier otra cosa
            relacionada a FnmnMnfn, únete!
          </p>
        </div>
        <div className="body">
          <div className="bodyContent">
            <form action="https://formspree.io/f/xwkyjrrq" method="POST">
              <label for="email">Ingresa tu Email: </label>
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
              ></input>
              <input
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                id="email"
                required
              ></input>
              <textarea
                id="message"
                rows="4"
                name="message"
                placeholder="Di hola!"
              ></textarea>
              {/* <input type="submit" value="subscribirse"></input> */}
              <button type="submit">Subscribirse</button>
            </form>
          </div>
        </div>
        {/* <div classname="emailBodyx">
          <form action="https://formspree.io/f/xwkyjrrq" method="POST">
            <label for="email">Ingresa tu Email: </label>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              id="nombre"
            ></input>
            <input
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              id="email"
              required
            ></input>
            <button type="submit">Subscribirse</button>
          </form>
        </div> */}
        {/* -------------- HASTA AQUI ------------- */}
        {/* <div className="footer">
          <button onClick={() => closeModal(false)}>Subscribe</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal2;
