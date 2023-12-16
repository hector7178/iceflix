'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel(prop) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{background:'#27272a'}}
        className="w-full h-full rounded-lg bg-zing-800 rounded-lg"
      >
       {prop?.data?.map((data, k)=>{
        return (<SwiperSlide key={k} className='p-6 lg:p-16 bg-zing-800 rounded-lg'>
          <div className='w-full h-fit flex flex-col p-4 sm:p-10 items-center gap-2 sm:gap-6 bg-zing-800 rounded-lg'>
            <div className='w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full border-2 border-fuxia'>
              <Image src={`/foto-perfil/${k+1}.jpg`} alt='foto perfil' width={100} height={100} className='w-16 h-16  md:w-20 md:h-20 bg-cover bg-center'></Image>
            </div>
            <div className='text-white flex flex-row w-full lg:px-12'>
              <span className='w-full text-center'>{data.nombre}</span>
              <span className='w-full text-lg flex flex-row justify-center'>
                {data.puntuacion}/5 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffd33c" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffd33c" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                </span>
            </div>
            <p className='text-white text-xs text-center p-4 lg:px-16'>{data.reseña}</p>
          </div>
        </SwiperSlide>)
       }) }
       
      </Swiper>
    </>
  );
}
