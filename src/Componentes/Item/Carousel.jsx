import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <div className='fondo-carousel'>
            <img src="https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen" className='imagen1-carousel' />
            <img src="https://images.pexels.com/photos/1671016/pexels-photo-1671016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen" className='imagen2-carousel' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='fondo-carousel2'>
            <img src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen" />
            <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/cuadro8.jpeg" alt="imagen" className='imagen2-carousel' />
            <img src="https://blog.delapaz.com.py/wp-content/uploads/2021/03/ae408a18-ddc5-411f-8832-57ab2b882d69-1024x1024.jpg" alt="imagen" className='imagen2-carousel' />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;