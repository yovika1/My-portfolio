import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    // <div className='all'>
    <div className=" text-white h-[80vh] items-center">
      <div className=" absolute px-8 -top-16 md:w-full h-96 lg:justify-center transition-transform duration-1000">
        <div className='flex justify-center w-full h-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
            <div className=" lg:order-first md:order-first order-first ">
              <img src="/Media/cool.png" alt="none" className="w-60 h-72 rounded "  data-aos="zoom-in-left" />
            </div>
            <div data-aos="zoom-in-left" className="md:order-last order-last lg:mr-96">
              <h1 className='text-white mb-6 font-semibold text-xs'>Let ME INTRODUCE MYSELF</h1>
              <div>
                <h2 className='  text-[25px] font-semibold leading-3 mb-6 text-amber-600'>
                  ABOUT ME
                </h2>
                <p className="text-sm md:text-lg">Passionate software developer with expertise in data analysis using Power BI certified by Microsoft. Skilled in AI, concurrent programming, and with 1 year of experience as a MERN Stack developer. Enhanced project efficiency by applying teamwork and technical skills.</p>
              </div>
            <Link href='/Contact'>
            <button className='p-1 text-sm rounded-md mt-4 border-2 font-semibold font-serif border-amber-400 hover:bg-purple-600 text text-white shadow-md shadow-yellow-100'>Contact Me</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
