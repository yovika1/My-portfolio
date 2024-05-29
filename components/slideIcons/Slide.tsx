// import React from 'react'
// import {Autoplay} from 'swiper/modules';
// import Image from 'next/image';
// import { SkillData } from '@/Data/SkillData';
// import {Swiper,SwiperSlide} from 'swiper/react';


// export const Slide = () => {
//   return (
//     <div>  <Swiper
//     slidesPerView={5}
//    loop={true}
//    autoplay={{
//        delay: 0,
//        disableOnInteraction:true,
//    }}
//    speed={5000}
//    modules={
//        [Autoplay]
//    }
//    className='max-w-[80%]'          
//    >
//        {SkillData.map((item,index) =>( 
//            <SwiperSlide key={index}>
//                <Image
//                src={item.Image}
//                alt={item.name}
//                width={item.width}
//                height={item.height}
//                />

//            </SwiperSlide>
// ))}
       
//    </Swiper>
//    <Swiper
//     slidesPerView={5}
//    loop={true}
//    autoplay={{
//        delay: 0,
//        disableOnInteraction:false,
//        reverseDirection:true
//    }}
//    speed={5000}
//    modules={
//        [Autoplay]
//    }
//    className='max-w-[80%]'          
//    >
//        {SkillData.map((item,index) =>( 
//            <SwiperSlide key={index}>
//                <Image
//                src={item.Image}
//                alt={item.name}
//                width={item.width}
//                height={item.height}
//                />

//            </SwiperSlide>
// ))}
       
//    </Swiper></div>
//   )
// }
