import { createContext } from "react";
import { useState } from "react";
interface datos{
    ide:number|undefined,
    setIde:(id:number|undefined)=>void,
    activoModal:boolean|undefined,
    setActivoModal:(valor:boolean|undefined)=>void,
    datoModal:number|undefined,
    setDatoModal:(datId:number)=>void, 
}
export const CatalogoContext=createContext<datos>({
    ide:0,
    setIde:()=>{},
    activoModal:false,
    setActivoModal:()=>{},
    datoModal:0,
    setDatoModal:()=>{}

})

interface context{
    children:any
}
export const CatalogoC=({children}:context)=>{
    const [ide,setIde]=useState <number>();
    const [activoModal,setActivoModal]=useState<boolean|undefined>(false);
    const [datoModal,setDatoModal]=useState<number>(0);
    return(
        <CatalogoContext.Provider value={{ide,setIde,activoModal,setActivoModal,datoModal,setDatoModal}}>
            {children}
        </CatalogoContext.Provider>
    )
}