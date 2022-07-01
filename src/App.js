import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Tour from './routes/Tour';
import Blog from './routes/Blog';
import Gallery from './routes/Gallery';
import Newsletter from './routes/Newsletter';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/newsletter" element={<Newsletter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
