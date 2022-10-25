import React from 'react'
import TituloGeneral from '../../components/TituloGeneral';
import FiguraDescuentoMobil from '../../components/FiguraDescuentoMobil';
import BotonCatalogo from '../../components/BotonCatalogo';
import FiguraDescuentoDesktop from '../../components/FiguraDescuentoDesktop';
import CatalogoDesktop from '../CatalogoDesktop';
const Index = () => {
  return (
    <div >
      <TituloGeneral/>
      <FiguraDescuentoMobil/>
      <BotonCatalogo/>
      <FiguraDescuentoDesktop/>
      <CatalogoDesktop/>
      
      
    </div>
  )
}

export default Index