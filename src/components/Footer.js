import React from 'react';
import './FooterStyles.css';
// import { FaInstagram, FaYoutube, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="title__section">
        <h1>TOUR</h1>
      </div>
      <div className="tour">
        <div className="shows__container">
          {/* --------  OTRA ROW -------- */}
          <div className="row">
            <div className="tour__row">
              <span>Feb 30</span>
            </div>
            <div className="tour__row">
              <span>Diva Nicotina</span>
            </div>
            <div className="tour__row">
              <span>Guayaquil, Ecuador</span>
            </div>
            <div className="tour__row">
              <a href="" target="_blank">
                <button type="button" className="boton">
                  <strong>TICKETS</strong>
                </button>
              </a>
            </div>
          </div>
          {/* --------  OTRA ROW -------- */}
          <div className="row">
            <div className="tour__row">
              <span>Oct 32</span>
            </div>
            <div className="tour__row">
              <span>Coliseo Voltaire Panadines Pana</span>
            </div>
            <div className="tour__row">
              <span>Guayaquil, Ecuador</span>
            </div>
            <div className="tour__row">
              <a href="" target="_blank">
                <button type="button" className="boton">
                  <strong>TICKETS</strong>
                </button>
              </a>
            </div>
          </div>
          {/* --------  OTRA ROW -------- */}
          <div className="row">
            <div className="tour__row">
              <span>Ago 3</span>
            </div>
            <div className="tour__row">
              <span>Arenal Sound con Synfodelick en Camp Nou</span>
            </div>
            <div className="tour__row">
              <span>Barcelona, España</span>
            </div>
            <div className="tour__row">
              <a href="" target="_blank">
                <button type="button" className="boton">
                  <strong>TICKETS</strong>
                </button>
              </a>
            </div>
          </div>
          {/* --------  OTRA ROW -------- */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
