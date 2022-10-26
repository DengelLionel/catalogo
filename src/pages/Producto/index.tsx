import React, { useEffect,useContext, useState } from 'react'
import { CatalogoContext } from '../../context/catalogoContext'
import { productos } from '../../data/data'
import Modal from '../../components/Modal'
interface producto{
  ident:number,
  detalles:any,
  wsp:string,
}
const Producto = ({ident,detalles,wsp}:producto) => {
  const {setIde,ide,activoModal,setActivoModal,datoModal,setDatoModal}=useContext(CatalogoContext)

 
  const [datos,setDatos]=useState<Array<any>>()


  const [datoOficialModal,setDatoOficialModal]=useState<Array<any>>()
  const DataModal=()=>{
    productos?.map((e:any)=>{
      setDatoOficialModal(e.detalles.imagenes.filter((e:any)=>e.id===datoModal)) 
    })
    
  }
  console.log("data",datoOficialModal)
  useEffect(()=>{
   /*  setDatos(productos.filter((e:any)=>e.id==ident)); */
    DataModal()
  },[ide,datoModal])

  console.log("datomodal",datoOficialModal)
  return (

    
        
        <section key={ident} className=''>

     <section className='relative -top-[290px]'>
     <section className='w-[300px] h-[90px] rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl bg-negro2 overflow-x-scroll overflow-y-hidden flex flex-row justify-center items-center p-[4px]'>
        {detalles.imagenes?.map((imagen:any)=>{
          
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
     <h1 className='font-bold font-Oswald text-xl text-white uppercase mt-[12px] mb-[12px]'>Características</h1>
       {detalles.caracteristicas?.map((detalle:any)=>{
        return(
          <>
          <article key={detalle.id} className='mt-1 border-gradient-br-yellow-red-gray-900 border-transparent border-solid border-2 w-full p-[8px] '>
            <p className='text-white font-Roboto font-extralight'>{detalle.caracteristica}</p>
            
          </article>
          </>
        )
       })}
     </section>
    
      <a className='fixed left-[280px] top-[500px] z-[26]'
       href={wsp} target="_blank" >
        <img className='w-[65px]' src="/img/whatsapp_logo.svg" alt="" />
      </a>
     </section>
      

      
    
  )
}

export default Producto