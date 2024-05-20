import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { useState } from 'react';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bodypositoning'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/startforfree' element={<Register />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
