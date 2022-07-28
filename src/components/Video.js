import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

// import patioVideo from '../assets/patio.mp4';
import imagenWapo from '../assets/img1.jpeg';
import imagenrosa from '../assets/pablofuji.jpg';
import cuenquita from '../assets/cuenca4.jpg';
import descarga from '../assets/pedacito-de-brujas.zip';

const Video = () => {
  return (
    <div className="hero">
      <img src={cuenquita} className="cuenquita"></img>
      <div className="content">
        <div className="socialIcons">
          <div className="socialIconsContainer">
            <a
              href="https://www.instagram.com/fenomenomenofeno/"
              target="_blank"
            >
              <span className="cambiarColor">
                <AiFillInstagram size={30} />
              </span>
            </a>
            <a
              // href="https://www.youtube.com/watch?v=3IskSsxS0qs&ab_channel=SofarLatinAmerica"
              href="https://youtu.be/TIz8Xx5XJgU?t=206"
              target="_blank"
            >
              <span className="cambiarColor">
                <AiFillYoutube size={30} />
              </span>
            </a>
            <a href="mailto:contacto@fenomenomenofeno.com" target="_blank">
              <span className="cambiarColor">
                <AiFillMail size={30} />
              </span>
            </a>
          </div>
        </div>
        <div className="fotoBio">
          <img src={imagenrosa} alt="" className="rosaPrincipal"></img>
          <p>
            Falso 9, brujo, fan del twang, ex-atleta de alto rendimiento, todo o
            nada.
          </p>
        </div>
        <div className="descargaGratisContainer">
          <div className="descargaContainer">
            <h2>Cero spotify</h2>
            {/* <h3>hey spotify verify this new account!</h3> */}
            {/* <h3>juanenderica@hotmail.com is my email :)</h3> */}
            <h2>Puro amor</h2>
            <h2>Descarga música gratis</h2>
            <a href={descarga} download>
              <h2>Dando click aquí</h2>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="copyright">© Tigre de Jade Records</div> */}
    </div>
  );
};

export default Video;
