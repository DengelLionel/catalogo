import React from 'react'
interface card{
  precio:string,
  imagen:string,
  wsp:string,
}
const CardDerecha = ({precio,imagen,wsp}:card) => {
  return (
    <section  className='relative -top-[150px]'>
    
   
     <div className='relative left-[210px] top-[120px] z-[25] rounded-full bg-purple-700 w-[160px] h-[160px] flex justify-center items-center'>

         <article className='grid grid-rows-[auto,auto] gap-0 '>
         <span className='text-yellow-500 font-bold font-Oswald text-2xl text-center'>PRECIO</span>
         <span className='text-white font-extrabold font-Oswald text-3xl'>{precio}</span>
         </article>
         
     </div>
 <section className='bg-gradientePrincipal w-[350px] h-[300px] rounded-tr-[28px] rounded-br-[28px] relative top-0 z-[20] rounded-tl-[28px] rounded-bl-[28px]'>
 <img  className=' w-[330px] z-[21]' src={imagen} alt="" />
 </section>
 
 <img className='w-[210px] h-[210px] relative -top-[170px] -left-[30px] z-[10] fill-current' src="/img/card.svg" alt="" />

 <a className='relative -top-[250px] z-[30] cursor-pointer'
       href={wsp} target="_blank" >
        <img className='w-[100px]' src="/img/whatsapp_logo.svg" alt="" />
      </a>



 </section>
  )
}

export default CardDerecha