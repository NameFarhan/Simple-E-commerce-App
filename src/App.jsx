import React from 'react';
import HomePage from './Components/HomePage';
import AllPro from './Components/AllPro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpro" element={<AllPro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
