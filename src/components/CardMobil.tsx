import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import { CatalogoContext } from "../context/catalogoContext";
import Producto from "../pages/Producto/index";
interface card{
titulo:string,
precio:string,
imagen:string,
identificador:number,
detalles:any,
wsp:string,
}


const Card = ({titulo,precio,imagen,identificador,detalles,wsp}:card) => {
  const navigate=useNavigate(); 
  const {setIde,ide,mostrarDetalle,setMostrarDetalle}=useContext(CatalogoContext); 
  const CerrarDetalles=()=>{
    if(ide!=identificador&&mostrarDetalle===true){
      setMostrarDetalle(false)
    }
  }
  useEffect(()=>{
   
  },[mostrarDetalle])
  return (
    <section key={identificador} className={` transition-all duration-1000 h-[630px] mb-[45px] mt-[45px]  `}>

       <h2 className='relative top-[50px] only:mt-1 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-2xl font-extrabold font-Oswald uppercase tracking-tighter text-transparent sm:text-5xl text-center '>{titulo} </h2>
      
        <div className='relative left-[178px] top-[70px] z-[25] rounded-full bg-purple-700 w-[110px] h-[110px] flex justify-center items-center'>

            <article className='grid grid-rows-[auto,auto] gap-0 '>
            <span className='text-yellow-500 font-bold font-Oswald text-xl text-center'>PRECIO</span>
            <span className='text-white font-extrabold font-Oswald text-xl'>{precio}</span>
            </article>
            
        </div>
        <div className="flex flex-col items-center justify-center ">
    <section className='bg-gradientePrincipal w-[200px] h-[200px] rounded-tr-[28px] rounded-br-[28px] relative top-0 z-[20] rounded-tl-[28px] rounded-bl-[28px]'>
    <img  className=' w-[230px] h-[230px] z-[21]' src={imagen} alt={titulo} />
    </section>
    <img className='w-[180px] h-[160px] relative -top-[140px] -left-[35px] z-[10] fill-current' src="/img/card.svg" alt="" />
    </div>
      
      <article className="relative top-[170px]">
      <Producto detalles={detalles} wsp={wsp} ident={identificador}/>
      </article>
      
    </section>
  )
}/* onClick={()=>HandleProductoClick(identificador)} */

export default Card