import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
  

  const notify = () => toast(' Producto al Carrito', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  

  return (
    <div className='count-general'>

        <div className="item-count">
            <button onClick={handleRestar} className="signo-negativo">-</button>
            <p className='signo-cantidad'>{cantidad}</p>
            <button onClick={handleSumar} className="signo-positivo">+</button>
        </div>
        <button className="agregar-al-carrito" onClick={(handleAgregar) || notify}>Agregar al carrito</button>
        <ToastContainer />
    </div>
  )
}

export default ItemCount