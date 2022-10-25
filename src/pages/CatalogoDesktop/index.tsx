import {useContext,useEffect,useState} from 'react'
import { productos } from '../../data/data'
import { CatalogoContext } from '../../context/catalogoContext'
import ContenidoCardDerecha from './ContenidoCardDerecha'
import ContenidoCardIzquierda from './ContenidoCardIzquierda'
import Modal from '../../components/Modal'
const CatalogoDesktop = () => {
    const {ide,activoModal,setActivoModal,datoModal,setDatoModal}=useContext(CatalogoContext)
    const [datoOficialModal,setDatoOficialModal]=useState<Array<any>>()
   

    const DataModal=()=>{
      productos?.map((e:any)=>{
        setDatoOficialModal(e.detalles.imagenes.filter((e:any)=>e.id===datoModal)) 
      })
      
    }
    useEffect(()=>{
      DataModal()
    },[datoModal])
  return(
    <>
    {activoModal&&<Modal>

{datoOficialModal?.map((datoo:any)=>{
  return(
    <section>
      <img  className='w-[400px] h-[400px]' src={datoo.imagen} alt="" />
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

{productos?.map((producto:any)=>{
          if(producto.id%2===0){
            return(
              <>
                <ContenidoCardDerecha
                  titulo={producto.producto}
                  precio={producto.precio}
                  imagen={producto.imagen}
                  detalles={producto.detalles}
                  wsp={producto.mensajewsp}
                   />
                  
              
              </>
                
          )
          
          }
          else if(producto.id%2!=0){
            return(
              <ContenidoCardIzquierda
                  titulo={producto.producto}
                  precio={producto.precio}
                  imagen={producto.imagen}
                  detalles={producto.detalles}
                  wsp={producto.mensajewsp}
                   />
            )
          }
       

        
       
   
    
  })}

    </>
  ) 
  
}

export default CatalogoDesktop