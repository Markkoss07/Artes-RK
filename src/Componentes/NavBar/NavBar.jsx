import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import {CartWidget} from '../Item/CartWidget'



 const NavBar = () => {
    return(
        <nav className ="navbar navbar-expand-lg navbar-dark bg-body-dark">
            <div className="container-fluid">
                <img src= "https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/imglogoderedes.jpeg" alt="logo" className='logo-rk' />
                <Link to="/" className='logo' >
                    <a className="navbar-brand" href="ddsd">Artes Rk</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="menu-link" to="/inicio">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </Link>
                        </li>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <Link className="menu-link" to="/productos/replicas">
                                <NavDropdown.Item href="#action/3.1">Réplicas</NavDropdown.Item>
                            </Link>
                            <Link className="menu-link" to="/productos/decorativo">
                                <NavDropdown.Item href="#action/3.2">
                                    Decorativos
                                </NavDropdown.Item>
                            </Link>
                            <Link className="menu-link" to="/productos/blanco y negro">
                                <NavDropdown.Item href="#action/3.3">Blanco y Negro</NavDropdown.Item>
                            </Link>    
                        </NavDropdown>
                        <li className="nav-item">
                            <Link className="menu-link" to="/contacto">
                                <a className="nav-link" href=" ./Componentes/Item/Contacto" >Contacto</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="menu-link" to="/sobre nosotros">
                                <a className="nav-link" href=" ./Componentes/Item/SobreNosotros" >Sobre Nosotros</a>
                            </Link>
                        </li> 
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>

    )
 }

 export default NavBar

// import React from 'react'
// import { Link } from 'react-router-dom'
// import {CartWidget} from '../Item/CartWidget'

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//         <Link to="/" className="logo"><h1>Carpishop</h1></Link>
//         <ul className="menu">
//             <li><Link className="menu-link" to="/">Inicio</Link></li>
//             <li><Link className="menu-link" to="/productos">Productos</Link></li>
//             <li><Link className="menu-link" to="/productos/réplicas">Medias</Link></li>
//             <li><Link className="menu-link" to="/productos/decorativo">Pantalones</Link></li>
//             <li><Link className="menu-link" to="/productos/blanco y negro">Remeras</Link></li>
//             <li><Link className="menu-link" to="/sobreNosotros">Sobre Nosotros</Link></li>
//             <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
//             <li><CartWidget /></li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar