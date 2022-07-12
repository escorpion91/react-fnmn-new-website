import React from 'react';
import './Galeria.css';

import Cuenca from '../assets/cuenca.jpg';
import Festivalito from '../assets/festivalito.jpg';
import Fnmn2022 from '../assets/27demayo.jpg';
import Pablofuji from '../assets/pablofuji.jpg';
import Fnmn2022B from '../assets/27demayo2.jpg';
import Simpol from '../assets/classicSimpol.jpeg';
import Goro from '../assets/conGoro.jpg';
import nightOut from '../assets/nightout.jpg';
import wapo from '../assets/img1.jpeg';

const Galeria = () => {
  return (
    <div className="blog__container">
      <img className="cuenquita" src={Cuenca}></img>
      <div className="container">
        <div className="heading">
          {/* <h3>
            Toma el <span>salto</span>
          </h3> */}
        </div>
        <div className="wrapper">
          {/* -------- COLUMNA 1 -------- */}
          <div className="columna">
            <div className="fade">
              <a href="https://www.instagram.com/yefefia9/" target="_blank">
                <img className="foto__galeria" src={Simpol}></img>
              </a>
            </div>
            <img className="foto__galeria" src={Pablofuji}></img>
            <img id="wapo" className="foto__galeria wapo" src={wapo}></img>
          </div>
          {/* -------- COLUMNA 2 -------- */}
          <div className="columna">
            <img className="foto__galeria" src={Festivalito}></img>
            <img
              className="foto__galeria"
              id="transparente"
              src={Fnmn2022B}
            ></img>
            <div className="fade">
              <a href="https://www.instagram.com/vicer_/" target="_blank">
                <img className="foto__galeria fade" src={Fnmn2022B}></img>
              </a>
            </div>
            <img className="foto__galeria" id="nightout" src={nightOut}></img>
          </div>
          {/* -------- COLUMNA 3 -------- */}
          <div className="columna">
            <div className="fade">
              <a href="https://www.instagram.com/yefefia9/" target="_blank">
                <img className="foto__galeria" src={Fnmn2022}></img>
              </a>
            </div>
            <img
              className="foto__galeria"
              id="transparente"
              src={Fnmn2022B}
            ></img>
            <a href="https://www.instagram.com/vicer_/" target="_blank">
              <img className="foto__galeria" src={Goro}></img>
            </a>
          </div>
          <div>
            {/* <img className="foto__galeria" src={Festivalito}></img> */}
          </div>
        </div>
      </div>
      {/* <div className="btnG">
        <button class="btncargar">Cargar</button>
      </div> */}
      <div className="copyright">© Tigre de Jade Records 2022</div>
    </div>
  );
};

export default Galeria;
