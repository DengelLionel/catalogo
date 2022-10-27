import CardMobil from "../../components/CardMobil"
import { productos } from "../../data/data"
const Catalogo = () => {
  return (
    <div className="flex flex-col gap-[25px] justify-center items-center  md:hidden">
      {productos?.map((producto:any)=>{
        return(
          <>
          <CardMobil
          identificador={producto.id}
          titulo={producto.producto}
          precio={producto.precio}
          imagen={producto.imagen}
          detalles={producto.detalles}
          wsp={producto.mensajewsp}
          />
          
          </>
          
        )
      })}
      
    </div>
  )
}

export default Catalogo