import React from 'react'
import { TypeAnimation } from 'react-type-animation'
export const AnimateText = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'A Full Stack Developer',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'A Mern stack developer',
      1000,
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
  
// import { motion } from 'framer-motion';

// const AnimatedText = () => {
//   return (
//     <div className="container">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2 }}
//       >
//         Hi! I'm <span className="name">John Pater</span>
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, delay: 1 }}
//       >
//         And I'm <span className="role">UX/UI Developer</span>
//       </motion.p>
//     </div>
//   );
// };

// export default AnimatedText;
