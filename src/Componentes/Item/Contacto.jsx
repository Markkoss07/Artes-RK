import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Contacto = () => {

    const [valores, setValores] = useState ({
        nombre: "",
        email: "",
        telefono: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <div className='contenedor '>
            <h1 className='titulo-principal'> Contacto</h1>
            <div className='fondo-contacto'>
                <form className='formulario relleno-form' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Ingrese su Nombre'
                        value={valores.nombre}
                        onChange={handleValores}
                        name="nombre"
                        className='input-from'
                    />
                    <input 
                        type="email" 
                        placeholder=' Correo Electronico'
                        value={valores.email}
                        onChange={handleValores}
                        name="email"
                        className='input-from'
                    />
                    <input 
                        type="phone" 
                        placeholder='Ingrese su Telefono'
                        value={valores.telefono}
                        onChange={handleValores}
                        name="telefono"
                        className='input-from'
                    />
                    <Link to="/Inicio">
                        <button className='enviar' type='submit'> Enviar</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Contacto