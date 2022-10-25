import React, { useEffect,useContext, useState } from 'react'
import {useParams} from "react-router-dom"
import { CatalogoContext } from '../../context/catalogoContext'
import { productos } from '../../data/data'
import Modal from '../../components/Modal'
const Producto = () => {
  const {ide,activoModal,setActivoModal,datoModal,setDatoModal}=useContext(CatalogoContext)
  const {id}=useParams();
 
  const [datos,setDatos]=useState<Array<any>>()


  const [datoOficialModal,setDatoOficialModal]=useState<Array<any>>()
  const DataModal=()=>{
    datos?.map((e:any)=>{
      setDatoOficialModal(e.detalles.imagenes.filter((e:any)=>e.id===datoModal)) 
    })
    
  }
  console.log("data",datoOficialModal)
  useEffect(()=>{
    setDatos(productos.filter((e:any)=>e.id==id));
    DataModal()
  },[id,datoModal])

  console.log(datos)
  return (

    <div className='flex justify-center'>
    {datos?.map((data:any)=>{
      return(
        
        <section key={data.id} className='h-[800px]'>
        <h2 className='text-center uppercase font-extrabold font-Oswald text-white text-xl relative top-[50px]'>{data.producto}</h2>
       
         <div className='relative left-[128px] top-[70px] z-[25] rounded-full bg-purple-700 w-[110px] h-[110px] flex justify-center items-center'>
 
             <article className='grid grid-rows-[auto,auto] gap-0 '>
             <span className='text-yellow-500 font-bold font-Oswald text-xl text-center'>PRECIO</span>
             <span className='text-white font-extrabold font-Oswald text-xl'>{data.precio}</span>
             </article>
             
         </div>
     <section className='bg-gradientePrincipal w-[200px] h-[200px] rounded-tr-[28px] rounded-br-[28px] relative top-0 z-[20] rounded-tl-[28px] rounded-bl-[28px]'></section>
     <img className='w-[180px] h-[160px] relative -top-[140px] -left-[25px] z-[10] fill-current' src="/img/card.svg" alt="" />
     <img  className=' w-[230px] relative -top-[340px] z-[21]' src={data.imagen} alt={data.producto} />

     <section className='relative -top-[290px]'>
     <section className='w-[300px] h-[90px] rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl bg-negro2 overflow-x-scroll overflow-y-hidden flex flex-row justify-center items-center p-[4px]'>
        {data.detalles.imagenes?.map((imagen:any)=>{
          
          return(
            <>
            <img onClick={()=>{setActivoModal(true);setDatoModal(imagen.id)}} className='w-[80px] h-[80px] transition-all duration-1000' key={imagen.id} src={imagen.imagen} alt={`${imagen.imagen}`} />
            
            </>
          )
        })}

        {activoModal&&<Modal>

                {datoOficialModal?.map((datoo:any)=>{
                  return(
                    <section>
                      <img className='w-[300px] h-[300px]' src={datoo.imagen} alt="" />
                      {/* <button className='relative -top-[190px] -left-[25px]'>
                      <svg width="41" height="80" viewBox="0 0 41 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0894763 39.9999L40.531 79.9158L40.686 0.241636L0.0894763 39.9999Z" fill="#4D06C1"/>
<path d="M38.64 58.36L20.32 40L38.64 21.64L33 16L9 40L33 64L38.64 58.36Z" fill="white"/>
</svg>

                      </button>
                      <button className='relative -top-[190px] left-[235px]'>
                      <svg width="49" height="80" viewBox="0 0 49 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.0894 40.1225L0.761951 79.8676L0.916932 0.193452L48.0894 40.1225Z" fill="#4D06C1"/>
<path d="M5 58.36L23.32 40L5 21.64L10.64 16L34.64 40L10.64 64L5 58.36Z" fill="white"/>
</svg>

                      </button> */}
                    </section>
                    
                    
                  )
                })}

            </Modal>}
      </section>
     <h1 className='font-bold font-Oswald text-xl text-white uppercase mt-[12px]'>Características</h1>
       {data.detalles.caracteristicas?.map((detalle:any)=>{
        return(
          <>
          <article key={detalle.id} className='mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-transparent w-full p-[8px] '>
            <p className='text-white font-Roboto font-extralight'>{detalle.caracteristica}</p>
            
          </article>
          </>
        )
       })}
     </section>
    
      <a className='fixed left-[280px] top-[500px] z-[26]'
       href={data.mensajewsp} target="_blank" >
        <img className='w-[65px]' src="/img/whatsapp_logo.svg" alt="" />
      </a>
     </section>
      

      )

    })} 
    </div>
  )
}

export default Producto