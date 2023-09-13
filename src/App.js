import * as React from "react";
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About";
import ContactUs from "./ContactUs";
import OurProjects from "./OurProjects";
import Home from "./Home";
import Footer from "./Footer";
import Designs from "./Designs";

import ScrollToTopButton from './ScrollToTopButton';


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={ <Home />}/>
        <Route path="home" element={ <Home />}/>
        <Route path="about" element={ <About/>}/>
        <Route path="projects" element={ <OurProjects />}/>
        <Route path="designs" element={ <Designs/>}/>
        <Route path="contact" element={ <ContactUs />}/>    
      </Routes>
      <ScrollToTopButton />

      <Footer/>
      
    </>
  );
}

export default App;
