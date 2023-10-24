import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { infodb } from '../firebase/config';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const pedidosRef = collection(infodb, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }
    // const [email] = {...register("email")};

    if (pedidoId) {
        return (
            <div className="container detalle-final-compra">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p className='codigo-compra'>Tu número de pedido es: {pedidoId}</p>
                <p className='detalle-compra'> Te mandaremos los detalles de tu compra a</p>
            </div>
        )
    }
    //  const CheckoutConfirmation = ({ pedidoId }) => (
    //     <div className="container">
    //       {pedidoId ? (
    //         <>
    //           <h1 className="main-title">Muchas gracias por tu compra</h1>
    //           <p>Tu número de pedido es: {pedidoId}</p>
    //         </>
    //       ) : (
    //         <p>No se ha realizado ningún pedido.</p>
    //       )}
    //     </div>
    //   );
    // export default CheckoutConfirmation;
    

  return (
    <main className="container checkout">
        <h1 className="main-title">Finalizar compra</h1>
        <p className='texto-from'>Complete con sus datos a continuación:</p>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <div className='relleno-form'>
                <input className='input-from' type="text" placeholder="Ingresá su nombre" {...register("nombre")} />
                <input className='input-from' type="email" placeholder="Ingrese su Correo Electronico" {...register("email")} />
                <input className='input-from' type="phone" placeholder="Ingrese su Telefono" {...register("telefono")} />
            </div>
            <button className="enviar" type="submit">Comprar</button>


        </form>
    </main>
  )
}

export default Checkout