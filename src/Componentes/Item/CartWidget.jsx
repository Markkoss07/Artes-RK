// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CartContext } from '../Context/CartContext';

// const CartWidget = () => {

//     const { cantidadEnCarrito } = useContext(CartContext);

//   return (
//     <div>
//         <Link className="menu-link" to="/carrito">
//             Carrito
//             <span className="numerito">{cantidadEnCarrito()}</span>
//         </Link>
//     </div>
//   )
// }

// export default CartWidget

import React, {useContext}from 'react'
import { BsMinecartLoaded } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
    return(
        <div className='carrito'>
            <Link className="menu-link" to="/carrito">
            <BsMinecartLoaded /> 
            <span className="numerito">{cantidadEnCarrito()}</span>

            </Link>
        </div>
    )
}