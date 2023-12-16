'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card(prop) {
  return (
    <div className='col-span-1 row-span-2 w-full h-full flex flex-col p-2 rounded-lg bg-zinc-800'>
        <div className='w-full h-1/2 flex justify-center items-center'>
            <Image src={`/${prop?.data?.URL}.svg`} className='w-full h-full' width={100} height={100}  alt='servicio'/>
        </div>
        <div className='w-full h-1/2 flex flex-col gap-2 text-white p-2 items-center justify-center'>
            <span className='text-white font-bold  w-full text-left'> {prop?.data.servicio  }</span>
            <span className='text-white font-bold text-xs w-full text-left '> {prop?.data.tiempo  }</span>
            <span className='text-white font-bold text-xs  w-full text-left'> {prop?.data.precio}</span>
            <Link href={`/productos/${prop?.data.URL}`} className='hover:text-[#291504] text-xs p-2 w-fit h-fit rounded-lg text-fuxia bg-transparent hover:bg-fuxia hover:text-white hover:shadow-lg font-bold duration-300'>Saber mas</Link>
        </div>


    </div>
  )
}

export default Card