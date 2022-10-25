import React from 'react'

const FiguraDescuentoDesktop = () => {
  return (
    <div className='hidden lg:block relative -top-[200px]'>
        <svg width="249" height="310" viewBox="0 0 249 310" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="249" height="214" rx="16" fill="url(#paint0_linear_0_1)"/>
<path d="M136.732 305.271C130.429 310.768 121.082 310.886 114.677 305.55L9.99661 218.326C-2.12627 208.225 4.94134 188.451 20.7459 188.251L228.462 185.625C244.266 185.426 251.7 205.017 239.768 215.422L136.732 305.271Z" fill="url(#paint1_linear_0_1)"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="124.5" y1="0" x2="124.5" y2="214" gradientUnits="userSpaceOnUse">
<stop stop-color="#CA8A04"/>
<stop offset="1" stopColor="#DC2626"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="125.792" y1="314.811" x2="123.637" y2="144.321" gradientUnits="userSpaceOnUse">
<stop stopColor="#CA8A04"/>
<stop offset="1" stopColor="#DC1C26"/>
</linearGradient>
</defs>
</svg>

    <section className='flex flex-col justify-center items-center relative -left-[495px] -top-[250px]'>
   
                <span className='text-white text-2xl font-bold font-Oswald'>HASTA</span>
                <span className='text-white text-7xl font-extrabold font-Oswald'>50%</span>
           
            <span className='text-white text-2xl font-bold font-Oswald'>DE DESCUENTO</span>
    </section>
    </div>
  )
}

export default FiguraDescuentoDesktop