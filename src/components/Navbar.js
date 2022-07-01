import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// import fnmnLogo from '../assets/fnmnlogo2.png';
import './NavbarStyles.css';
// import Modal from './Modal';
import Modal2 from './Modal2';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        {/* <img src={fnmnLogo} atl="" className="fnmnLogo"></img> */}
        {/* <h1>FNMN MNFN</h1>{' '} */}
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" className="glide">
            Música/Tienda
          </Link>
        </li>
        {/* <li>
          <Link to="/blog">Blog</Link>
        </li> */}
        <li>
          <Link to="/tour" className="glide">
            Tour
          </Link>
        </li>
        {/* <li>
          <Link to="/contact">Contacto</Link>
        </li> */}
        <li>
          <Link to="/gallery" className="glide">
            Galería
          </Link>
        </li>
        {/* <li>
          <Link to="/newsletter">Newsletter</Link>
        </li> */}

        <li>
          <button
            className="modalNewsletter glide"
            className="glide"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Newsletter
          </button>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
      {/* {openModal && <Modal closeModal={setOpenModal} />} */}
      {openModal && <Modal2 closeModal={setOpenModal} />}
    </div>
  );
};

export default Navbar;
