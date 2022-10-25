
import Card from './CardDerecha'
import {useContext}from 'react'
import {CatalogoContext} from '../../context/catalogoContext'
import CardDerecha from './CardDerecha'
interface contenido{
  titulo:string,
  precio:string,
  imagen:string,
  detalles:any,
  wsp:string,
}
const ContenidoCardDerecha = ({titulo,precio,imagen,detalles,wsp}:contenido) => {
  const {ide,activoModal,setActivoModal,datoModal,setDatoModal}=useContext(CatalogoContext)
  return (
    <section className='hidden lg:grid lg:grid-cols-[auto,auto] lg:gap-[20px] lg:w-[900px] lg:h-[500px] lg:relative lg:-top-[250px] lg:left-[15%] '>
        <article>
            <h2 className='font-Oswald font-bold text-3xl text-center uppercase text-white mb-[15px]'>{titulo}</h2>
            <section className='w-[400px] h-[100px] rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl overflow-x-scroll overflow-y-hidden flex flex-row justify-center items-center p-[4px]'>
              {detalles.imagenes?.map((imagenes:any)=>{
                return(
                  <img onClick={()=>{setActivoModal(true);setDatoModal(imagenes.id)}} className='w-[150px] h-[90px] cursor-pointer' src={imagenes.imagen} alt={imagenes.id}/>
                )
              })}
            </section>
            <h2 className='font-Oswald font-bold text-2xl text-white mt-[10px] mb-[15px]'>CARACTERÍSTICAS</h2>
            {detalles.caracteristicas?.map((caracteristica:any)=>{
              return(
                <article key={caracteristica.id} className='mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-transparent w-[400px] p-[8px] '>
                <p className='text-white font-Roboto font-extralight'>
                  {caracteristica.caracteristica}
                </p>
                
              </article>
              )
            })}
           
        </article>
        <CardDerecha 
        precio={precio}
        imagen={imagen}
        wsp={wsp}
        />
    </section>
  )
}

export default ContenidoCardDerecha