import React from 'react';
import { ProjectsData } from '@/Data/ProjectData';
import ProjectsCard from '@/components/myProjects/ProjectsCard';

const Projects = () => {
  return (
    <div>
      <div className='font-bold text-lg flex justify-center'>My Projects</div>
      <div className='w-screen h-screen rounded-lg flex items-center justify-center bg-center bg-cover'>
        <div className='md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
          {ProjectsData.map((item: any, index: number) => (
            <ProjectsCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.src}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
