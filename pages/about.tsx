import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="xl:h-[97vh] text-white h-[100vh]   w-full xl:-mx-0 flex ">
      <div className="grid grid-cols-1 border-line md:grid-cols-2 gap-4 items-center w-full h-[100vh]  md:h-[88vh] border-b-2  border-cyan-600 mt-20 ">
        <div className="flex justify-center">
        <video 
  src="/Media/about-video.mp4" 
  className="w-48 h-72 md:w-96 md:h-96 rounded-full opacity-75" 
  data-aos="zoom-in-right"   
  autoPlay 
  loop 
  muted
/>

        </div>
        <div data-aos="zoom-in-left" className="text-center mx-4 md:text-left">
          <h1 className="text-white mb-4 font-semibold text-xs md:text-sm">LET ME INTRODUCE MYSELF</h1>
          <div>
            <h2 className="text-amber-700 text-2xl md:text-3xl font-semibold mb-4">ABOUT ME</h2>
            <p className="text-sm md:text-lg">Passionate Full Stack Developer with completed 1 year of internships at two different
companies hands-on experience in MERN (MongoDB, Express.js, React, Node.js) stack
development. Proven ability to enhance project efficiency by 30%, certified by Microsoft in
Power BI. Skilled in AI hacks and concurrent programming, with a strong commitment to
delivering high-quality solutions. Achieved a 20% improvement in system performance
through optimization techniques.
</p>
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
