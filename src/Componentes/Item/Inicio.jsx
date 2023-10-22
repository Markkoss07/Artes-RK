import React from 'react'
import NavBar from '../NavBar/NavBar'
import ControlledCarousel from './Carousel'
import ItemListContainer from './ItemListContainer'
import {Link} from 'react-router-dom'

const Inicio = () => {

    return (
        <div>
            <Link to="/carousel" element={<ControlledCarousel />}>
                <NavBar />
                <ControlledCarousel />
                <ItemListContainer />
            </Link>

        </div>
    )

}

export default Inicio