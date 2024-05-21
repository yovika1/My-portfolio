import React from 'react';
import Home  from './Home';
import About from './about';
import Tools from './Tools';
import Project from './Project';
import Contact from './Contact';


const HomePage = () => {

  return (
    <div className='overflow-x-hidden'>
     
      <Home/>
      <div className=' relative z-1 bgIMage '>
      <About/>
      <Tools/>  
      <Project/>
      <Contact/>
      </div>
      
     
    </div>
  );
};

export default HomePage;
