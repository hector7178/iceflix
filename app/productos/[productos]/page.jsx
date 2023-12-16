import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

function page({ params }) {
    const servicio=[
        {
        servicio:'NETFLIX',
        tiempo:'( 30 Días )',
        precio:'Precio: 3,5$',
        src:'/NETFLIX.svg',
        URL:'NETFLIX'
        },
        {
        servicio: 'CRUNCHYROLL' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 2$',
        src:'/CRUNCHYROLL.svg',
        URL:'CRUNCHYROLL'
        },
        {
        servicio: 'STAR +' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,50$',
        src:'/STAR.svg',
        URL:'STAR'
        },
        {
        servicio: 'DISNEY +' ,
        tiempo:' ( 30 Días  ) ',
        precio:'Precio: 1,49$',
        src:'/DISNEY.svg',
        URL:'DISNEY'
        },
        {
        servicio: 'AMAZON PRIME' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,90$',
        src:'/AMAZONPRIME.svg',
        URL:'AMAZONPRIME'
        },{
        servicio:'HBO MAX',
        tiempo:'( 30 Días  )',
        precio:'Precio: 1,90$',
        src:'/HBOMAX.svg',
        URL:'HBOMAX'
        },
        {
          servicio:'SPOTIFY',
          tiempo:'( 30 Días  )',
          precio:'Precio: 3.5$',
          src:'/SPOTIFY.svg',
          URL:'SPOTIFY'
        },{
        servicio:'SPOTIFY',
        tiempo:'( 1 AÑO  )',
        precio:'Precio: 28$',
        src:'/SPOTIFYYEAR.svg',
        URL:'SPOTIFYYEAR'
        }, 
        {
          servicio:'Promoción NETFLIX y CRUNCHROLL',
          src:'/promociones/promocionNetflixycrunch.svg',
          URL:'Netflixycrunch',
          promo:true,
          tiempo:'( 1 MES )',
          precio:'precio: 4.5$',
        },
        {
          servicio:'Promoción DISNEY +',
          src:'/promociones/promocionDisney.svg',
          URL:'disney',
          promo:true,
          tiempo:'( 1 MES )',
          precio:'precio: 1.5$',
    
        },
        {
          servicio:'Promoción HBO MAX',
          src:'/promociones/promocionHbo.svg',
          URL:'hbo',
          promo:true,
          tiempo:'( 2 MESES )',
          precio:'precio: 3$',
    
        },{
          servicio:'Promoción NETFLIX',
          src:'/promociones/promocionNetflix.svg',
          URL:'netflix',
          promo:true,
          tiempo:'( 1 MES )',
          precio:'precio: 3.5$',
        },{
          servicio:'Promoción STAR +',
          src:'/promociones/promocionStar.svg',
          URL:'star',
          promo:true,
          tiempo:'( 1 MES )',
          precio:'precio: 2$',
    
        },{
          servicio:'Promoción SPOTIFY',
          src:'/promociones/promocionSpotify.svg',
          URL:'spotify',
          promo:true,
          tiempo:'( 3 MESES )',
          precio:'precio: 7$',
        }
        
    ]

    
    const found = servicio.find((element) => element.URL.toUpperCase()===params.productos.toUpperCase());
   
    if(!found){
        return redirect('/')
    }   
   
  return (
<main className=" scroll-smooth min-h-screen grid  h-fit w-full px-10 py-16 md:py-8 md:px-6 lg:px-12 lg:py-12" style={{background:'url(/fondo.svg)', backgroundPosition:'center' , backgroundSize:'cover'}}>


    <div className='mt-[100px] md:m-0 hidden md:flex before:rounded-lg before:block before:absolute before:-inset-1 before:-skew-y-3 h-[75vh] top-[10vh] rounded-lg w-[80vw] left-[7vw]  before:bg-fuxia  relative inline-block'>
        <div className='w-full h-full bg-zinc-700 relative z-1 rounded-lg grid grid-cols-2'>
            <div className='w-full h-full p-6 flex justify-center'>
            {
            !found?.promo?
            <Image src={found.src} alt='img servicio' width={100} height={100} className='h-3/4 w-auto max-h-[400px]  rounded-lg'/>
            :
            <Image src={found.src} alt='img servicio' width={100} height={100} className='h-3/4 w-full max-h-[400px] rounded-lg'/>
            }
            </div>
            <div className='py-8 flex flex-col gap-4'>
                <h3 className='text-white text-2xl font-bold'>{ found.servicio }</h3>
                <span className='text-white text-xl font-bold'>{ found.tiempo }</span>
                <span className='text-white text-xl font-bold'> { found.precio}</span>
                {found.servicio ==='SPOTIFY'?
                <p className='text-white text-xs '>
                ✅Con tu correo electrónico<br></br>
                ✅Con garantía por el tiempo contratado<br></br>
                ✅Por encargo<br></br>
                ✅Se conservan sus playlist (Renovación)  <br></br>
                </p>
                :
                <p className='text-white text-xs '>
                ✅ Cuentas Originales   <br></br>
                ✅ Renovables  <br></br>
                ✅ Garantía por el tiempo contratado   <br></br>
                ✅ Cuentas completas y perfiles disponibles
                </p>}
                <p className='text-white text-xs '>
                <span className='text-white text-xl'>Los métodos de pagos:</span><br></br><br></br>
                ✅ Pago Móvil <br></br>
                ✅ Binance <br></br>
                ✅ Zinli<br></br>
                ✅ Zelle<br></br>
                </p>
                <Link className='p-2 w-fit h-fit flex-row flex  gap-2 bg-green-600 rounded-lg text-white' href={`https://api.whatsapp.com/send/?phone=584128220099&text=Hola,%20Me%20gustaria%20adquirir%20el%20servicio%20de%20${found.servicio}&type=phone_number&app_absent=0`}>
                    Compra ahora
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill='#ffffff' className='w-6 h-6'>
                        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                    </svg>
                </Link>
            </div> 
            
        </div>

    </div>
    <div className='mt-[100px] p-10 md:hidden w-full h-[110vh] md:h-full bg-zinc-700 relative z-1 rounded-lg grid grid-rows-3'>
       <div className='w-full h-full p-2 row-span-1'>
        <Image src={found.src} alt='img servicio' width={100} height={100} className='h-3/4 w-full rounded-lg'/>

        </div>
        <div className='py-0 md:py-8 flex flex-col gap-4 row-span-2'>
            <h3 className='text-white text-2xl font-bold'>{ found.servicio }</h3>
            <span className='text-white text-xl font-bold'>{ found.tiempo }</span>
            <span className='text-white text-xl font-bold'> { found.precio}</span>
            <p className='text-white text-xs '>
            ✅ Cuentas Originales   <br></br>
            ✅ Renovables  <br></br>
            ✅ Garantía por el tiempo contratado   <br></br>
            ✅ Cuentas completas y perfiles disponibles
            </p>
            <p className='text-white text-xs '>
            <span className='text-white text-xl'>Los métodos de pagos:</span><br></br><br></br>
            ✅ Pago Móvil <br></br>
            ✅ Binance <br></br>
            ✅ Zinli<br></br>
            ✅ Zelle<br></br>
            </p>
            <Link className='p-2 w-fit h-fit flex-row flex  gap-2 bg-green-600 rounded-lg text-white' href={`https://api.whatsapp.com/send/?phone=584128220099&text=Hola,%20Me%20gustaria%20adquirir%20el%20servicio%20de%20${found.servicio}&type=phone_number&app_absent=0`}>
                Comprar ahora
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill='#ffffff' className='w-6 h-6'>
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
            </Link>
        </div> 
        
    </div>
</main>
  )
}

export default page