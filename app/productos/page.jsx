import Card from "../components/Card"

function page() {
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
        precio:'Precio: 1.5$',
        src:'/CRUNCHYROLL.svg',
        URL:'CRUNCHYROLL'
        },
        {
        servicio: 'DISNEY y STAR +' ,
        tiempo:' ( 30 Días  ) ',
        precio:'Precio: 3.5$',
        src:'/DISNEY.svg',
        URL:'DISNEY'
        },
        {
        servicio: 'MAGIS TV' ,
        tiempo:' ( 30 Días  ) ',
        precio:'Precio: 4$',
        src:'/MAGISTV.svg',
        URL:'MAGISTV'
        },
        {
        servicio: 'CANVAS' ,
        tiempo:' ( 30 Días  ) ',
        precio:'Precio: 1$',
        src:'/CANVAS.svg',
        URL:'CANVAS'
        },
        {
        servicio: 'APPLE TV' ,
        tiempo:' ( 3 meses  ) ',
        precio:'Precio: 5$',
        src:'/APPLETV.svg',
        URL:'APPLETV'
        },
        {
        servicio: 'AMAZON PRIME' ,
        tiempo:'( 30 Días  )',
        precio:'Precio: 2$',
        src:'/AMAZONPRIME.svg',
        URL:'AMAZONPRIME'
        },{
        servicio:'HBO MAX',
        tiempo:'( 30 Días  )',
        precio:'Precio: 3.5$',
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
        tiempo:'( 3 Meses  )',
        precio:'Precio: 5$',
        src:'/SPOTIFY.svg',
        URL:'SPOTIFY'
        }
    ]
  return (
    <main className="gap-4 scroll-smooth flex flex-col min-h-screen justify-center items-center  h-fit w-full  p-2 md:p-6 lg:p-12  bg-gradient-to-b from-black via-bg-[#030128] to-black relative"
    style={{background:'url(/fondo.svg)', backgroundPosition:'center' , backgroundSize:'cover'}}>
        
        <div className="relative z-20 w-full grid grid-col-5 mt-[12vh] mt-[10vh]">
                <h1 className="col-span-3 text-fuxia font-bold text-2xl md:text-4xl font-sans">SERVICIOS</h1>
                <div className="col-span-2 font-sans">

                </div>
        </div>
        <section className="relative z-20 col-span-4 gap-6 grid grid-cols-2 md:grid-cols-3 h-fit  w-full md:w-3/4 lg:grid-cols-4 grid-rows-7 p-2 md:p-4 lg:p-10">
            
            {servicio.map((data, i)=>{
              return  ( <Card key={i} data={data}/>)
            })}

        </section>

        <div className="bg-gradient-to-b from-black via-[#030128] to-black w-full h-full absolute top-0 z-10 opacity-60"></div>
    
    </main>
  )
}

export default page
