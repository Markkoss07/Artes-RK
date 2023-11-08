import React from 'react'
import Subtitulo from './Subtitulo';

const SobreNosotros = () => {
    return (
        <div className='sobre-nosotros'>
            <h1 className='titulo-sobre-nosotros'>Sobre Nosotros</h1>
            <Subtitulo />
            <div className='mapa-qsomos'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9091374447617!2d-58.425739910442786!3d-34.58116558658219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58308725845%3A0x6c1301b2924b8a91!2sPlaza%20Italia!5e0!3m2!1ses-419!2sar!4v1699202697444!5m2!1ses-419!2sar" width="600" height="450"
              allowfullscreen
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              title='google maps'
              className='mapa'></iframe>
              <div className='quienes-somos'>
                <h2 className='titulo-quienes-somos'>!Quienes Somos¡</h2>
                <p className='text-qsomos'>Una gran pregunta que muchos se preguntan ¿Quines Somos?, nos podemos considerar una gran página que te va a brindar todo tipo de obras de arte increibles para poder apreciar lo maravilloso de cada una. <br></br>
                Fue fundada este año para los aficionados del arte, decoración y también el descubrimientos para aquellos nuevos/as artistas con grandes talentos.</p>
              </div>
            </div>
            <div className='obras-importantes'>
              <p className='texto-img'>Estas son una de las obras más reconocidas de nuestra tienda</p>
              <div className='imagenes-snosotros'>
                <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/cuadro8.jpeg" alt="imagen" className='imagen-importante' />
                <img src="https://markkoss07.github.io/UltimoProyectojs-Aybar/imagenes/cuadro7white.jpeg" alt="imagen" className='imagen-importante2' />
              </div>
            </div>

        </div>
    )
}

export default SobreNosotros