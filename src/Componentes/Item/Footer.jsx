import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='fondo-footer'>
            <Link to="/Inicio" className='footer'>
                <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/imglogoderedes.jpeg" alt="logo" className='logo-rk2'/>
                <h1 className='titulo-footer'>Artes RK</h1>
                <p className="credito"> © Aybar Marcos 2023</p>
            </Link>
            
        </div>
    )
}

export default Footer