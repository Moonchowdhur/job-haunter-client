import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
    <Header></Header>
    <div className='md:min-h-[calc(100vh-100px)]'>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default App;