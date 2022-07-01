import React from 'react';
import './Blog.css';

import Cuenca from '../assets/cuenca.jpg';
import Festivalito from '../assets/festivalito.jpg';
import Fnmn2022 from '../assets/27demayo.jpg';
import Pablofuji from '../assets/pablofuji.jpg';
import Fnmn2022B from '../assets/27demayo2.jpg';

const Blog = () => {
  return (
    <div className="blog__container">
      <img className="cuenquita" src={Cuenca}></img>
    </div>
  );
};

export default Blog;

{
  /* <img className="cuenquita" src={Cuenca}></img>
<div className="img__container2">
  <div className="img__container">
    <img className="festivalito" src={Festivalito}></img>
  </div>
</div> */
}
