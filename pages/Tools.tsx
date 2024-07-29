import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';
import { SkillData } from '@/Data/SkillData';

const Tools = () => {
  return (
    <div 
    className=' md: h-screen xl:h-[97vh]  w-screen flex items-center justify-center bg-cover bg-center  border-cyan-600 '
    data-aos="zoom-in-left"
    >
        <div  className='flex flex-col gap-20 max-w-[80%]  text-center items-center'>
            <div className='flex flex-col gap-4 items-center '>
                <h1 className=' font-semibold text-white text-2xl'>
                    Skill{' '}
                    <span className='bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                        {' '}
                        &{' '}
                    </span>
                    Technologies
                </h1>
                <p className='text-gray-400 text-[20px]'>
                Using the latest tech this world has to offer
                </p>
            </div>
            <Swiper
             slidesPerView={5}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction:true,
            }}
            speed={5000}
            modules={
                [Autoplay]
            }
            className='max-w-[80%] '          
            >
                {SkillData.map((item,index) =>( 
                    <SwiperSlide key={index}>
                        <Image
                        src={item.Image}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        />

                    </SwiperSlide>
  ))}
                
                     </Swiper>


        </div>
    </div>
  )
}

export default Tools