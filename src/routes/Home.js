import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Video from '../components/Video';

import fnmnLogo from '../assets/fnmnLogo3.png';
import fnmnLogoNegro from '../assets/fnmnlogonegro.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <img src={fnmnLogo} atl="" className="fnmnLogox"></img> */}
      <img src={fnmnLogoNegro} atl="" className="fnmnLogox"></img>
      <Video />
      <Footer />
    </div>
  );
};

export default Home;
