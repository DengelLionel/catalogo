import ReactDOM from 'react-dom';
import {useContext} from "react";
import { CatalogoContext } from '../context/catalogoContext';
interface modal{
    children:any
}

const Modal = ({children}:modal) => {
    const {setActivoModal,activoModal}=useContext(CatalogoContext)
    const Close=()=>{
        setActivoModal(false);
    }
  return ReactDOM.createPortal(
    <div className='bg-negro2  z-[30] fixed top-0 w-full h-full transition-all duration-1000'>
        <button onClick={Close} className='transition-all duration-1000 relative top-[10px] left-[300px] lg:left-[1000px] lg:top-[30px]'>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 3.42429L30.5757 0L17 13.5757L3.42429 0L0 3.42429L13.5757 17L0 30.5757L3.42429 34L17 20.4243L30.5757 34L34 30.5757L20.4243 17L34 3.42429Z" fill="white"/>
</svg>

        </button>
        <section className='flex justify-center items-center w-full h-full transition-all duration-1000'>
        {children}
        </section>
        
    </div>
  ,document.getElementById('modal'))
}

export default Modal