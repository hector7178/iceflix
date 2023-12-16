
import Link from 'next/link'
import Carousel from './components/carousel'
import SwiperCard from './components/swiper'
import { Suspense } from 'react'
import Loader from './components/Loader'
import { lazy } from 'react';
import Image from 'next/image'

export default function Home() {
  const promociones=[
    {
      servicio:'Promoción NETFLIX y CRUNCHROLL',
      img:'promocionNetflixycrunch.svg',
      url:'Netflixycrunch',
      promo:true
    },
    {
      servicio:'Promoción DISNEY +',
      img:'promocionDisney.svg',
      url:'disney',
      promo:true

    },
    {
      servicio:'Promoción HBO MAX',
      img:'promocionHbo.svg',
      url:'hbo',
      promo:true

    },{
      servicio:'Promoción NETFLIX',
      img:'promocionNetflix.svg',
      url:'netflix',
      promo:true
    },{
      servicio:'Promoción STAR +',
      img:'promocionStar.svg',
      url:'star',
      promo:true

    },{
      servicio:'Promoción SPOTIFY',
      img:'promocionSpotify.svg',
      url:'spotify',
      promo:true
    }
  ]
  const reseñas=[
    {
      nombre: "Sofía Melo",
      puntuacion: 4,
      reseña: "Me encanta la música y por eso compré una cuenta de Spotify. La cuenta funciona muy bien y tiene la mejor calidad de sonido. Lo único que no me gustó fue que el proceso de pago fue un poco complicado."
    },
    {
      nombre: "Carlos Arturo",
      puntuacion: 5,
      reseña: "Excelente servicio, las cuentas funcionan perfectamente y el precio es muy razonable. lo Recomiendo para comprar cuentas de streaming."
    },
    {
      nombre: "Pedro Maldonando",
      puntuacion: 5,
      reseña: "Es muy fácil y seguro, y aceptan diferentes métodos de pago. Además, tienen promociones y descuentos muy buenos."
    },
    {
      nombre: "María Gabriela",
      puntuacion: 4,
      reseña: "Me gustó mucho la variedad de opciones que ofrece ICEFLIX. Pude comprar cuentas de Netflix, Disney+ y Amazon con facilidad y seguridad."
    },
    {
      nombre: "Daniela Paez",
      puntuacion: 5,
      reseña: "Me encanta el cine y por eso uso M&L para comprar cuentas de streaming de las mejores plataformas. Tienen una gran variedad de opciones y precios, y el servicio es muy rápido y confiable. No tengo ninguna queja."
    }
  ];
  const servicio=[
    {
    servicio:'NETFLIX',
    tiempo:'( 30 Días )',
    img:'NETFLIX.svg',
    promo:false,
    precio:'Precio: 3,5$',
    url:'NETFLIX'
    },
    {
    servicio: 'CRUNCHYROLL' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 2$',
    img:'CRUNCHYROLL.svg',
    promo:false,
    url:'CRUNCHYROLL'
    },
    {
    servicio: 'STAR +' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,50$',
    img:'STAR.svg',
    promo:false,
    url:'STAR'
    },
    {
    servicio: 'DISNEY +' ,
    tiempo:' ( 30 Días  ) ',
    precio:'Precio: 1,49$',
    img:'DISNEY.svg',
    promo:false,
    url:'DISNEY'
    },
    {
    servicio: 'AMAZON PRIME' ,
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,90$',
    img:'AMAZONPRIME.svg',
    promo:false,
    url:'AMAZONPRIME'
    },{
    servicio:'HBO MAX',
    tiempo:'( 30 Días  )',
    precio:'Precio: 1,90$',
    img:'HBOMAX.svg',
    promo:false,
    url:'HBOMAX'
    }   
]
  
  return (
    <Suspense fallback={<Loader/>}>
    <main className=" scroll-smooth flex min-h-screen h-fit w-full flex-col bg-gradient-to-b from-black via-gray-500 to-black relative">
    
      <section className='grid items-center relative justify-items-center grid-rows-2 md:grid-rows-1  md:grid-cols-2  w-full h-screen ' style={{background:'url(/fondo.svg)', backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className='row-span-1 md:col-span-1 gap-4 flex leading-2 md:relative flex-col w-full h-1/2 lg:h-3/4 p-10 sm:pl-7 md:pl-18 lg:pl-24  md:pt-16 text-center md:text-start items-center md:justify-center lg:justify-start md:items-start lg:text-start  relative z-20 '>
          <h1 className='text-white text-5xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold font-sans leading-tight'>SERVICIOS <br/><span className='text-fuxia bg-transparent text-4xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans'>STREAMING</span></h1>
          <h2 className='text-white text-md md:text-lg lg:text-lg font-bold font-sans t'>Disfruta de tus plataformas de Streaming favoritas totalmente garantizadas</h2>
          <h2 className='text-white text-xs md:text-xs lg:text-md font-bold font-sans t'>Ofrecemos la mejor calidad y precio en todos nuestros servicios</h2>
          <Link href={'/productos'} className='text-white sm:text-fuxia p-2 w-fit h-fit font-bold border-fuxia sm:border-b-4 hover:border-none hover:scale-105 bg-fuxia sm:bg-transparent hover:bg-violet-900 hover:text-white hover:shadow-lg ease-in-out duration-300 rounded-lg relative z-20'>Conoce nuestros servicios</Link>
        </div>
        <div className='row-span-1 flex w-1/2 sm:w-2/3 h-2/3 items-end relative md:col-span-1 relative z-20'>
          <Image src={'/adornos.svg'} alt='pingui image' width={100} height={100}  className='w-full h-3/4 opacity-80 top-0 absolute z-10'/>
          <Image src={'/pingui.svg'} alt='pingui image' width={100} height={100}  className='w-full h-1/2 absolute z-10'/>
        </div>
        <div className='absolute opacity-60 top-0 w-full h-full sm:h-screen z-10 bg-gradient-to-t from-black via-[#fFFFFF00] to-[#000815]'></div>
      
      </section>
      <div className='w-full h-[15vh] bg-red-100 bg-black bg-gradient-to-t from-[#000815] via-black via-90% to-black '></div>
      <section id={'promociones'} className='flex flex-col gap-10 relative overflow-hidden p-6 md:p-20 w-full items-center h-[75vh] sm:h-screen bg-cover bg-center ' 
      style={{background:'url("/fondo2.svg")', backgroundPosition:'center',backgroundSize:'cover'}}>
        <h3 className='text-fuxia text-3xl h-fit font-bold font-sans text-center relative z-20'>PROMOCIONES</h3>
        <div className='w-full md:w-1/2 h-[55vh] sm:h-[45vh] sm:h-[70vh] relative z-20'>
          <SwiperCard data={promociones}/>
        </div>
      <div className='absolute top-0 w-full h-[75vh] sm:h-screen z-10 bg-gradient-to-t from-black via-[#fFFFFF00] to-[#000815]'></div>
      </section>
      
      <div className='w-full h-[15vh] bg-red-100 bg-gradient-to-t from-[#000815] via-[#000815] to-black'></div>
      
      <section className='flex flex-col gap-10 relative overflow-hidden p-6 md:p-20 w-full items-center h-[75vh] sm:h-screen bg-cover bg-center  bg-gradient-to-t from-black from-20% via-[#0f012f] to-[#000815] to-80%' >
        <h3 className='text-fuxia text-3xl h-fit font-bold font-sans text-center'>SERVICIOS</h3>
        <div className='w-full md:w-3/4 lg:w-1/2 h-[55vh] sm:h-[45vh] sm:h-[70vh]'>
          <SwiperCard data={servicio}/>
        </div>
       
      </section>
      <section className='relative  w-full h-[75vh] sm:h-screen flex flex-col p-6 md:p-10 lg:p-20 gap-8 items-center bg-gradient-to-t from-[#000815] from-20% via-[#0f012f] to-black to-80%' >
        <h4  className='text-fuxia text-2xl md:text-3xl font-bold font-sans text-center w-full'>OPINIÓN DE NUESTROS CLIENTES</h4>
        <div className='w-full md:w-3/4 h-[50vh] md:h-[70vh] bg-zing-800 '>
        <Carousel data={reseñas} /> 
        </div>
        
      </section>
      <section className='relative  w-full h-[50vh] flex flex-col p-2 gap-8 items-center bg-gradient-to-t from-[#000815] from-20% via-[#0f012f] to-black to-80%' >
        <h4  className='text-fuxia text-2xl md:text-3xl font-bold font-sans text-center w-full'>CONTACTANOS</h4>
        <span className='text-white text-lg text-center'>Conoce más de nosotros y síguenos en nuestras redes sociales</span>
          <div className='p-4 w-[80%] sm:w-3/4 h-1/2 grid grid-cols-3 p-4 items-center justify-items-center'>
            <Link className='w-3/4 flex flex-col items-center justify-center col-span-1 gap-2 hover:scale-105'  href={'/'}>
              <Image src={'/redesSociales/whatsapp.svg'} className='' width={100} height={100} alt=''></Image>
              <span className='text-fuxia '>whatsapp</span>
            </Link>
            <Link  className='w-3/4 flex flex-col items-center justify-center col-span-1 gap-2 hover:scale-105' href={'/'}>
              <Image src={'/redesSociales/instagram.svg'} className='' width={100} height={100} alt=''></Image>
              <span className='text-fuxia '>Instagram</span>
            </Link>
            <Link  className='w-3/4 flex flex-col items-center justify-center col-span-1 gap-2 hover:scale-105' href={'/'}>
              <Image src={'/redesSociales/facebook.svg'} className='' width={100} height={100} alt=''></Image>
              <span className='text-fuxia '>Facebook</span>
            </Link> 
          </div>
        
      </section>
      
      <footer className='h-[35vh] bg-zinc-800 w-full grid grid-cols-2 sm:grid-cols-4 p-6 relative'>
        <div className=' sm:col-span-1 px-10 p-4'>
          <h6 className='text-white text-3xl text-center'>ICEFLIX</h6>
          <h6 className='text-white text-xs text-center '>SERVICIOS DE STREAMING</h6>
         
        </div>
        <div className=' sm:col-span-3 p-8 md:p-12 lg:p-16 items-center justify-center'>
           <div className='w-full h-3/4'>
              <ul className='grid  grid-cols-1 md:grid-cols-2 gap-2'>
                <li><Link href={'/'} className='text-white'>Inicio</Link></li>
                <li><Link href={'/productos'} className='text-white'>Productos</Link></li>
                <li><Link href={'/#promocion'} className='text-white'>Promociones</Link></li>
                <li><Link href={'/#contactanos'} className='text-white'>Contactanos</Link></li>
              </ul>
          </div>
        </div>
        
      </footer>
    </main>
    </Suspense>
  )
}
