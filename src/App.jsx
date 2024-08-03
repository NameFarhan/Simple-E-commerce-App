import React from 'react';
import HomePage from './Components/HomePage';
import AllPro from './Components/AllPro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './Components/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpro" element={<AllPro />} />
        <Route path="/MoreDet" element={<ProductPage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
