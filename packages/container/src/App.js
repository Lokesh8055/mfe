import React, { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Marketing from './components/Marketing';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  );
}

export default App;