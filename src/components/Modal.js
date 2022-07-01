import React from 'react';
import { BsSpotify } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import FnmnLogoNegro from '../assets/fnmnlogonegro.png';

import './Modal.css';

const Modal = ({ closeModal }) => {
  // const show = document
  //   .querySelector('.emailDiv')
  //   .addEventListener('click', function () {
  //     document.querySelector('form').classList.add('show');
  //   });

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
          <h1>Subscríbete al boletín, usando cualquier cuenta social o mail</h1>
        </div>
        <div className="body">
          {/* ----------------- PRIMERA FILA --------------- */}
          <div className="bodyContenido1">
            {/* ----------- SPOTIFY ----------- */}
            <div className="spotifyDiv">
              <div className="iconoDeBoletin" id="iconoDeSpotify">
                <a href="#" className="iconodeSpotify" id="spotifyIcon">
                  <BsSpotify />
                </a>
              </div>
            </div>
            {/* -------- YOUTUBE -------- */}
            <div className="youtubeDiv">
              <div className="iconoDeBoletin" id="iconoDeYoutube">
                <a href="#" className="iconodeYoutube" id="youtubeIcon">
                  <BsYoutube />
                </a>
              </div>
            </div>
            {/* ------------ FIN DE YOUTUBE ----------- */}
          </div>
          {/* ----------------- FIN DE PRIMER FILA --------------- */}
          {/* -------------- SEGUNDA FILA -------------- */}
          <div className="bodyContenido2">
            {/* ----------- twitter ----------- */}
            <div className="twitterDiv">
              <div className="iconoDeBoletin" id="iconoDeTwitter">
                <a href="#" className="iconodeTwitter" id="twitterIcon">
                  <AiFillTwitterCircle />
                </a>
              </div>
            </div>
            {/* -------- FACEBOOK -------- */}
            <div className="facebookDiv">
              <div className="iconoDeBoletin" id="iconoDeFacebook">
                <a href="#" className="iconodeFacebook" id="facebookIcon">
                  <BsFacebook />
                </a>
              </div>
            </div>
            {/* ------------ FIN DE FACEBOOK ----------- */}
          </div>
          {/* ----------------- FIN DE SEGUNDA FILA --------------- */}
          {/* -----------------TERCERA FILA --------------- */}
          <div className="bodyContenido3">
            {/* ----------- Instagram ----------- */}
            <div className="instagramDiv">
              <div className="iconoDeBoletin" id="iconoDeInstagram">
                <a href="#" className="iconodeInstagram" id="instagramIcon">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            {/* -------- MAIL -------- */}
            <div className="emailDiv">
              <div className="iconoDeBoletin" id="iconoDeEmail">
                <a
                  href="#"
                  className="iconodeEmail"
                  id="emailIcon"
                  // onclick={show}
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            {/* ------------ FIN DE MAILL ----------- */}
          </div>
          {/* ----------------- FIN DE TERCERA FILA --------------- */}
        </div>
        {/* ----------- ESTO ES LO DEL MAIL, DESDE AQUI BORRA ------------ */}
        <div classname="emailBody">
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
            {/* <input type="submit" value="subscribirse"></input> */}
            <button type="submit">Subscribirse</button>
          </form>
        </div>
        {/* -------------- HASTA AQUI ------------- */}
        {/* <div className="footer">
          <button onClick={() => closeModal(false)}>Subscribe</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
