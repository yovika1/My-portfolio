import React from 'react';
import { ProjectsData } from '@/Data/ProjectData';
import ProjectCard from '../components/myProjects/ProjectCard';

const Projects = () => {
  return (
    <main className='flex flex-col items-center h-[100vh] w-full bg-cover bg-center md:h-[120vh]'>
      <div className='flex flex-col items-center w-full md:h-full mt-28 border-line border-b-2 border-cyan-600 md:my-20'>
        <h1 className='text-lg font-bold my-11 text-white md:my-20'>
          My <span className='text-yellow-400'>Projects</span>
        </h1>
        <div className='scroll-container relative h-60 gap-2 md:h-full flex overflow-x-auto scrollbar-hide w-full md:w-[81%] lg:w-[67%] whitespace-nowrap md:flex-wrap md:gap-5'>
          {ProjectsData.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.src}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
