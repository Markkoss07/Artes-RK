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
        <h1>Sobre Nosotros</h1>
    )
}

export default SobreNosotros