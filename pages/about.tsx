import React from 'react';

const About = () => {
  return (
    <div className="text-white h-[80vh] items-center md:px-8">
      <div className="absolutt top-2 w-96 h-96 lg:justify-center transition-transform duration-1000">
        <div className='flex justify-center w-full h-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
            <div className="lg:w-3/5 lg:order-first md:order-first order-first">
              <img src="/Media/side image.jpg" alt="none" className="w-96 lg:rounded-lg"  data-aos="zoom-in-left" />
            </div>
            <div data-aos="zoom-in-left" className="md:order-last order-last">
              <h1 className='text-white mb-6 text-xs'>Let ME INTRODUCE MYSELF</h1>
              <div>
                <h2 className='  text-[25px] font-semibold leading-3 mb-6 text-amber-600'>
                  ABOUT ME
                </h2>
                <p className="text-lg">Passionate software developer with expertise in data analysis using Power BI certified by Microsoft. Skilled in AI, concurrent programming, and with 1 year of experience as a MERN Stack developer. Enhanced project efficiency by applying teamwork and technical skills.</p>
              </div>
              <button className='p-1 w-25 text-sm rounded-md mt-4 border-2 font-semibold font-serif bg-violet-800'>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
