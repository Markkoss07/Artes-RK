import React from 'react'
import { Link } from 'react-router-dom'
// import { toCapital } from './toCapital'
const Item = ( {producto} ) => {
  return (
    <>
            <div className="producto card" style={{width: '280px'}} >
                <img src={producto.imagen} alt={producto.titulo} className="card-img-top imagen"/>
                <div className="card-body">
                    <h4 className="card-title">{producto.titulo}</h4>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    {/* <p>Categoría: {toCapital(producto.categoria)}</p> */}
                    <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                </div>
            </div>
    </>
  )
}

export default Item