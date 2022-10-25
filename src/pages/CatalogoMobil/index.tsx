import Card from "../../components/Card"
import { productos } from "../../data/data"
const Catalogo = () => {
  return (
    <div className=" flex flex-col justify-center items-center sm:hidden">
      {productos?.map((producto:any)=>{
        return(
          <>
          <Card 
          identificador={producto.id}
          titulo={producto.producto}
          precio={producto.precio}
          imagen={producto.imagen}
          
          />
          
          </>
          
        )
      })}
      
    </div>
  )
}

export default Catalogo