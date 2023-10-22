import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div className='count-general'>

        <div className="item-count">
            <button onClick={handleRestar} className="signo-negativo">-</button>
            <p className='signo-cantidad'>{cantidad}</p>
            <button onClick={handleSumar} className="signo-positivo">+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount