import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import 'react-bootstrap-icons'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container tienda">
        <h1 className="titulo-principal">Carrito</h1>

        {
            carrito.map((prod, onDelete) => (
                <div key={prod.id}>
                    <br />
                    <div className='fondo-carrito'>
                        <img src={prod.imagen} alt={prod.titulo}  className="imagen-carrito"/>
                        <div className='carrito-producto-titulo'>
                            <small>Titulo</small>
                            <h3 className='titulo-carrito'>{prod.titulo}</h3>
                        </div>
                        <div className='carrito-producto-cantidad'>
                            <small>Cantidad</small>
                            <p className='cantidad-carrito'>{prod.cantidad}</p>
                        </div>
                        <div className='carrito-producto-precio'>
                            <small>Precio</small>
                            <p className='precio-carrito'>${prod.precio}</p>
                        </div>
                        <div className='carrito-producto-subtotal'>
                            <small>Precio total</small>
                            <p className='precio-total-carrito'>${prod.precio * prod.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" onClick={() => onDelete(prod.id)} >
                            <img src="https://cdn-icons-png.flaticon.com/512/3515/3515498.png" alt="eliminar-logo" className='eliminar-logo' />
                         </button>
                    </div>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <div className='total-de-compra'>
                    <h2>Total: ${precioTotal()}</h2>
                    <div className='vaciar-finalizar-compra'>
                        <button onClick={handleVaciar} className="boton-vaciar">Vaciar</button>
                        <Link to="/checkout" className='link-finalizar-compra'>Finalizar compra</Link>
                    </div>
                </div>
            </> :
            <div className='carrito-vacio'>
                <h2 className='ningun-producto'>No hay ningun producto en el carrito</h2>
                <Link to="/productos">
                    <button className='ver-mas'> Ver Productos</button>
                </Link>

            </div>
        }
        
    </div>
  )
}

export default Carrito