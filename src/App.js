import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import './style/tailwind.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='h-[110px] laptop:h-[50px]' />
      <Carousel />
    </>
  );
};

export default App;
