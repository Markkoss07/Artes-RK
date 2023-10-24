import React from 'react'
// import NavBar from '../NavBar/NavBar'
import ControlledCarousel from './Carousel'
import ItemListContainer from './ItemListContainer'
import Recuadros from './Recuardos'
// import {Link} from 'react-router-dom'

const Inicio = () => {

    return (
        <div>
            {/* <NavBar /> */}
            <ControlledCarousel/>
            <Recuadros />
            <ItemListContainer/>


        </div>
    )

}

export default Inicio