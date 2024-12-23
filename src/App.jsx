import React from 'react';
import './index.css';
import Home from './Pages/Home';
import Bookings from './Pages/Bookings';
import CarListings from './Pages/CarListings';
import Authentication from './Pages/Authentication';
import CarDetails from './Pages/CarDetails';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
export default function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Bookings' element={<Bookings/>}></Route>
      <Route path='/CarListings' element={<CarListings/>}></Route>
      <Route path='/Authentication' element={<Authentication/>}></Route>
      <Route path='/CarDetails' element={<CarDetails/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
};


