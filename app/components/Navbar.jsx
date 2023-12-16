'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import HomeIcon from './svgs/HomeIcon'
import ShopIcon from './svgs/ShopIcon'
import PromoIcon from './svgs/PromoIcon'
import ContactIcon from './svgs/ContactIcon'
import MenuIcon from './svgs/MenuIcon'
import XIcon from './svgs/XIcon'
import Image from 'next/image'

function Navbar() {
    const [open,setOpen]=useState(true)
  return (
    <header className='h-[12vh] w-full flex align-end justify-end absolute z-20 bg-[#030128]'>
        <Link href={'/'} className='absolute top-4 left-4 h-fit w-fit'>
        <Image src={'/logoiceflix.svg'} alt='logo' width={100} height={20} className=' w-[150px] h-[40px]'></Image>
        </Link>
         <ul className='hidden md:flex flex-row gap-6 w-fit h-full p-6'>
            <li className=' hover:scale-105 opacity-70 hover:opacity-100'>
                <Link href={'/'} className='flex flex-row gap-2 text-white '>
                    <HomeIcon className='text-white w-6 h-6 '/>Inicio
                </Link>
            </li>
            <li className='  hover:scale-105 opacity-70 hover:opacity-100'>
                <Link href={'/productos'} className='flex flex-row gap-2 text-white '>
                    <ShopIcon className='text-white w-6 h-6 '/>Productos
                </Link>
            </li>
            <li className='hover:scale-105 opacity-70 hover:opacity-100 '>
                <Link href={'/#promociones'} className='flex flex-row gap-2  text-white '>
                    <PromoIcon className='text-white w-6 h-6 '/>Promociones
                </Link>
            </li>
            <li className='hover:scale-105 opacity-70 hover:opacity-100'>
                <Link href={'/#contactanos'} className='text-white flex flex-row gap-2  '>
                    <ContactIcon className='text-white w-6 h-6 '/>Contactanos
                </Link>
            </li>
        </ul>
        
        {open ?
        <MenuIcon className='flex md:hidden w-10 h-10 font-bold text-white absolute top-4 right-4' onClick={()=>setOpen(false)}/>
        :
        <ul className='flex md:hidden flex-col gap-6 w-[50vw] h-[50vh] bg-[#27272a] p-6 items-end'>
            <li  className='flex flex-row gap-2 '>
                <XIcon className='w-8 h-8 text-white ' onClick={()=>setOpen(true)}/>
            </li>
        
            <li className=' '>
                <Link href={'/'} className='text-white  flex flex-row gap-2'>Inicio<HomeIcon className='text-white w-6 h-6'/></Link>
                
            </li>
            <li className='flex flex-row gap-2 '>
                <Link href={'/productos'} className='text-white flex flex-row gap-2'>Productos<ShopIcon className='text-white w-6 h-6'/></Link>
                
            </li>
            <li className='flex flex-row gap-2 '>
                <Link href={'/#promociones'} className='text-white flex flex-row gap-2'>Promociones<PromoIcon className='text-white w-6 h-6'/></Link>
                
            </li>
            <li className='flex flex-row gap-2 '>
                <Link href={'/#contactanos'} className='text-white flex flex-row gap-2'>Contactanos<ContactIcon className='text-white w-6 h-6'/></Link>
                
            </li>
        </ul>}
    </header>
  )
}

export default Navbar