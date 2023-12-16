'use client'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function SwiperCard(prop) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="h-full w-full relative"
      >
        {prop.data.map((data, key)=>{
            return (
            <SwiperSlide key={key}  >
          {data.promo?
            <div   className='h-full w-full  rounded  relative duration-100 ease-in-out'>
            <Image src={`/promociones/${data.img}`} alt='img promo' width={100} height={100} className='w-full h-full absolute'/>
            <Link href={`/productos/${data.url}`} className='cursor-grab absolute top-0 w-full h-full z-30' ></Link>
            </div>
            :
            <div   className='h-full w-full  rounded  relative duration-100 ease-in-out'>
              <Image src={`/${data.img}`} alt='img' width={100} height={100} className=' absolute top-0 w-[85%] h-3/4 max-w-[290px] max-h-[290px]'/>
              <div  className='absolute top-16 sm:top-10  left-2 flex flex-col'>
                <span className=' text-white text-xs sm:text-md font-bold'>{data.servicio}</span>
                <span className=' text-white text-xs sm:text-md font-bold'>{data.precio}</span>
              </div>
              <Link href={`/productos/${data.url}`} className='duration-300 ease-in-out text-center rounded-lg font-bold hover:scale-105 cursor-grab absolute top-[60%] sm:top-3/4 w-3/4 sm:w-1/2 left-[12.5%] sm:left-1/4  h-fit bg-[#11ade8] z-30 p-2' >Saber mas</Link>
            </div>}
            </SwiperSlide>)
        })}
        
      </Swiper>
    </>
  );
}
