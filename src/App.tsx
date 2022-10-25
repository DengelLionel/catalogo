import {Routes,Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import Index from './pages/Home'
import './App.css'
import Catalogo from "./pages/CatalogoMobil";
import Producto from "./pages/Producto";
import { CatalogoC } from "./context/catalogoContext";
function App() {


  return (

    <main className="w-full h-full p-[12px] lg:pl-[60px] lg:pr-[60px]">
      <CatalogoC>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/catalogo" element={<Catalogo/>}/>
        <Route path="/producto/:id" element={<Producto/>}/>
      </Routes>
      </BrowserRouter>
      </CatalogoC>
    </main>
  )
}

export default App
