import React from 'react';
import Galeria from '../components/Galeria';
import NavbarBLK from '../components/NavbarBLK';
import fnmnLogox from '../assets/fnmnlogonegro.png';
import Navbar from '../components/Navbar';

const Gallery = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar /> */}
      <img src={fnmnLogox} atl="" className="fnmnLogox"></img>
      <Galeria />
    </div>
  );
};

export default Gallery;
