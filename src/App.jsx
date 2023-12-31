import './App.css';
import ItemListContainer from './Componentes/Item/ItemListContainer';
import ItemDetailContainer from './Componentes/Item/ItemDetailContainer'
import NavBar from './Componentes/NavBar/NavBar';
import Contacto from './Componentes/Item/Contacto';
import SobreNosotros from './Componentes/Item/SobreNosotros';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from './Componentes/Context/CartContext';
import Carrito from './Componentes/Item/Carrito';
import Footer from './Componentes/Item/Footer'
import Checkout from './Componentes/Item/Checkout'
import Inicio from './Componentes/Item/Inicio';



function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar /> 

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/sobre nosotros' element={<SobreNosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/inicio" element={<Inicio />} />
            {/* <Route path="/carusel" element={<ControlledCarousel />}/> */}
          </Routes>
          <Footer />
        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;
