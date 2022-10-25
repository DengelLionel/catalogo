import { createContext } from "react";
import { useState } from "react";
interface datos{
    ide:number|undefined,
    setIde:(id:number|undefined)=>void,
    activoModal:boolean|undefined,
    setActivoModal:(valor:boolean|undefined)=>void,
    datoModal:number|undefined,
    setDatoModal:(datId:number|undefined)=>void, 
}
export const CatalogoContext=createContext<Partial<datos>>({});
interface context{
    children:any
}
export const CatalogoC=({children}:context)=>{
    const [ide,setIde]=useState <number>();
    const [activoModal,setActivoModal]=useState<boolean>(false);
    const [datoModal,setDatoModal]=useState<number>(0);
    return(
        <CatalogoContext.Provider value={{ide:ide,setIde:(id)=>setIde(id),activoModal:activoModal,setActivoModal:(valor)=>setActivoModal(valor),datoModal:datoModal,setDatoModal:(datId)=>setDatoModal(datId)}}>
            {children}
        </CatalogoContext.Provider>
    )
}