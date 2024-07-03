import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="xl:h-[97vh]   text-white h-[110vh]   w-full xl:-mx-0 flex ">
      <div className="grid grid-cols-1 border-line md:grid-cols-2 gap-6 items-center w-full h-[96vh]  border-b-2  border-cyan-600 mt-20 ">
        <div className="flex justify-center">
          <img src="/Media/cool.png" alt="none" className="w-48 h-60 md:w-60 md:h-72 rounded flipped " data-aos="zoom-in-right" />
        </div>
        <div data-aos="zoom-in-left" className="text-center mx-4 md:text-left">
          <h1 className="text-white mb-4 font-semibold text-xs md:text-sm">LET ME INTRODUCE MYSELF</h1>
          <div>
            <h2 className="text-amber-700 text-2xl md:text-3xl font-semibold mb-4">ABOUT ME</h2>
            <p className="text-sm md:text-lg">Passionate software developer with expertise in data analysis using Power BI certified by Microsoft. Skilled in AI, concurrent programming, and with 1 year of experience as a MERN Stack developer. Enhanced project efficiency by applying teamwork and technical skills.</p>
          </div>
          <Link href='/Contact'>
            <button className='p-1 text-sm md:text-base rounded-md mt-4 border-2 font-semibold font-serif  hover:bg-purple-600 text text-white'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
