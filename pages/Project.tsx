import React, { useState, useEffect, useRef } from 'react';
import { ProjectsData } from '@/Data/ProjectData';
import ProjectsCard from '../components/myProjects/ProjectCard';

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<any>(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const value:any = containerRef.current.clientWidth <= 768 || false
      setIsMobile(value);
      // setIsTable(containerRef.current.clientWidth<= 1
    };

    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [containerRef]);

  const handleCardFlip = () => {
    setVisibleIndex((prevIndex) => (prevIndex + 1) % ProjectsData.length);
  };

  return (
    <div>
      <div
       className='font-bold text-lg flex justify-center'>MY <span className=' text-yellow-500 ml-2'>Projects</span></div>
      <div
        ref={containerRef}
        className='w-screen h-screen rounded-lg flex items-center justify-center bg-center bg-cover'
      >
        <div className='md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
          {ProjectsData.map((item, index) => (
            <ProjectsCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.src}
              url={item.url}
              isMobile={isMobile}
              isFlipped={isMobile && index === visibleIndex}
              handleFlip={isMobile ? handleCardFlip : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
