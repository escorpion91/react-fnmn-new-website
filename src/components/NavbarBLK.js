import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarBLK.css';

const NavbarBLK = () => {
  const [click, setClick] = useState(false);
  const handleClickk = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        {/* <img src={fnmnLogo} atl="" className="fnmnLogo"></img> */}
        {/* <h1>FNMN MNFN</h1>{' '} */}
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Música/Tienda</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/tour">Tour</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contacto</Link>
        </li> */}
        <li>
          <Link to="/newsletter">Newsletter</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClickk}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default NavbarBLK;
