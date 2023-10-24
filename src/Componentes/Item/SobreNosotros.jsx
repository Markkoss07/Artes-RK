import React, { useEffect }from 'react'

const SobreNosotros = () => {

    useEffect(() => {

        const clickear = () => {
          console.log("Click");
        }
    
        window.addEventListener("click", clickear)
    
        return () => {
          window.removeEventListener("click", clickear)
        }
    
      }, [])
    return (
        <div className='sobre-nosotros'>
            <h1 className='titulo-sobre-nosotros'>Sobre Nosotros</h1>

        </div>
    )
}

export default SobreNosotros