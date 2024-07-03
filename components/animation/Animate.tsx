import React from 'react'
import { TypeAnimation } from 'react-type-animation'
export const AnimateText = () => {
  return (
    <TypeAnimation
    sequence={[
      'A Full Stack Developer',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'A web developer',
      1000,
      'A Power BI Data Analyst',
      1000
    ]}
    wrapper="span"
    speed={50}
    className='xl:text-[50px] lg:text-40px sm:text-[35px] text-[25px] text-white text-bold z-1000 re'
    repeat={Infinity}
  />
);
};
  