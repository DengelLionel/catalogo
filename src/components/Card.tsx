import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import { CatalogoContext } from "../context/catalogoContext";
interface card{
titulo:string,
precio:string,
imagen:string,
identificador:number,
}


const Card = ({titulo,precio,imagen,identificador}:card) => {
  const navigate=useNavigate(); 
  const {setIde,ide}=useContext(CatalogoContext); 
  const HandleProductoClick=(id:number)=>{
     navigate(`/producto/${id}`); 
    
  }
  return (
    <section onClick={()=>HandleProductoClick(identificador)} key={identificador} className='h-[300px] mb-[25px]'>
       <h2 className='text-center text-white uppercase font-extrabold font-Oswald text-xl relative top-[50px]'>{titulo}</h2>
      
        <div className='relative left-[128px] top-[70px] z-[25] rounded-full bg-purple-700 w-[110px] h-[110px] flex justify-center items-center'>

            <article className='grid grid-rows-[auto,auto] gap-0 '>
            <span className='text-yellow-500 font-bold font-Oswald text-xl text-center'>PRECIO</span>
            <span className='text-white font-extrabold font-Oswald text-xl'>{precio}</span>
            </article>
            
        </div>
    <section className='bg-gradientePrincipal w-[200px] h-[200px] rounded-tr-[28px] rounded-br-[28px] relative top-0 z-[20] rounded-tl-[28px] rounded-bl-[28px]'>
    <img  className=' w-[230px] z-[21]' src={imagen} alt={titulo} />
    </section>
    <img className='w-[180px] h-[160px] relative -top-[140px] -left-[25px] z-[10] fill-current' src="/img/card.svg" alt="" />
   
  

    </section>
  )
}/* onClick={()=>HandleProductoClick(identificador)} */

export default Card