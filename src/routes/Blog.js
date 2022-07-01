import React from 'react';
// import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import NavbarBLK from '../components/NavbarBLK';

import fnmnLogox from '../assets/fnmnlogonegro.png';
import './Blog.css';

const Tour = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar /> */}
      <img src={fnmnLogox} atl="" className="fnmnLogox"></img>
      <Blog />
      {/* <HeroImage /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Tour;
