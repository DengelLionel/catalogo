import {Link} from "react-router-dom"

const BotonCatalogo = () => {
   
  return (
    <section className='flex justify-center sm:hidden'>
        <Link 
        to="/catalogo"
        className='bg-gradientePrincipal text-white font-bold text-xl pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded-tr-full rounded-br-full rounded-bl-full rounded-tl-full'>IR AL CATÁLOGO</Link>
    </section>
   
  )
}

export default BotonCatalogo