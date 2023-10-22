import React, {useState} from 'react'

const Contacto = () => {

    const [valores, setValores] = useState ({
        nombre: "",
        email: "",
        telefono: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado", valores)
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='contenedor'>
            <h1 className='main-titulo'> Contacto</h1>
            <form className='formulario' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Ingrese su Nombre'
                    value={valores.nombre}
                    onChange={handleValores}
                    name="nombre"
                />
                <input 
                    type="email" 
                    placeholder='Ingrese su Correo Electronico'
                    value={valores.email}
                    onChange={handleValores}
                    name="email"
                />
                <input 
                    type="phone" 
                    placeholder='Ingrese su Telefono'
                    value={valores.telefono}
                    onChange={handleValores}
                    name="telefono"
                />

                <button className='enviar' type='submit'> Enviar</button>

            </form>
        </div>
    )
}

export default Contacto