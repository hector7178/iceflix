'use client'
import { useEffect, useState } from 'react'
import { scroll } from 'framer-motion'

function Adornos() {
    const [dataScroll, setDataScroll]=useState()

    useEffect(()=>{
      scroll(progress => {
      setDataScroll(progress*100)
    })
    },[dataScroll])
  return (
    <>
      
    </>
  )
}

export default Adornos