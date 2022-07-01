import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import fnmnLogo from '../assets/fnmnlogo2.png';
import './Tour.css';

const Tour = () => {
  return (
    <div>
      <Navbar />
      <img src={fnmnLogo} atl="" className="fnmnLogo"></img>
      <Footer />
    </div>
  );
};

export default Tour;
