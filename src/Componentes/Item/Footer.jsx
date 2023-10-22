import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='fondo-footer'>
            <Link to="/" className='footer'>
                <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/imglogoderedes.jpeg" alt="logo" className='logo-rk2'/>
                <h1 className='titulo-footer'>Artes RK</h1>
                <p className="credito"> © Aybar Marcos 2023</p>
            </Link>
            
        </div>
        // <div className='footerPrincipal'>
        //     <div className="fondoFooter">
        //         <Link>
        //         </Link>
        //             <a href="./index.html" className="logoFooter" >
        //                 <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/imglogoderedes.jpeg" alt="logo">
        //                 <p>Artes RK</p>
        //             </a> 
        //         </Link>
        //         <div className="redesSociales">
        //             <p>FORMAS DE ENVIO</p>
        //             <a href="http://www.instagram.com/resler.ka/" target="_blank" className="instagram"><img src="./imagenes/instagram1.png" alt="insta"></a>
        //             <a href="http://www.instagram.com/resler.ka/" target="_blank" className="facebook"><img src="./imagenes/facebook.png" alt="facebok"></a>
        //             <a href="http://www.instagram.com/resler.ka/" target="_blank" className="twitter"><img src="./imagenes/twitter.png " alt="x" ></a>
        //         </div>
        //         <p className="credito"> © Aybar Marcos 2023</p>
        //     </div>
        // </div>
    )
}

export default Footer