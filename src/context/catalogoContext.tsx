import { createContext } from "react";
import { useState } from "react";
interface datos{
    ide:number|undefined,
    setIde:(id:number|undefined)=>void,
    activoModal:boolean|undefined,
    setActivoModal:(valor:boolean|undefined)=>void,
    datoModal:number|undefined,
    setDatoModal:(datId:number)=>void, 
    mostrarDetalle:boolean|undefined,
    setMostrarDetalle:(mostrarDet:boolean|undefined)=>void,
}
export const CatalogoContext=createContext<datos>({
    ide:0,
    setIde:()=>{},
    activoModal:false,
    setActivoModal:()=>{},
    datoModal:0,
    setDatoModal:()=>{},
    mostrarDetalle:false,
    setMostrarDetalle:()=>{}

})

interface context{
    children:any
}
export const CatalogoC=({children}:context)=>{
    const [ide,setIde]=useState <number>();
    const [activoModal,setActivoModal]=useState<boolean|undefined>(false);
    const [datoModal,setDatoModal]=useState<number>(0);
    const [mostrarDetalle,setMostrarDetalle]=useState<boolean|undefined>(false);
    return(
        <CatalogoContext.Provider value={{ide,setIde,activoModal,setActivoModal,datoModal,setDatoModal,mostrarDetalle,setMostrarDetalle}}>
            {children}
        </CatalogoContext.Provider>
    )
}