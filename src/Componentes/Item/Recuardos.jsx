import React from "react";

const Recuadros = () => {

    return (

        <div className="tiposdeObras">
            <div className="cuadroArte1">  
                <div className="imgFondo1">
                    <img src="https://ventadearte.com.ar/wp-content/uploads/2020/11/objeto5.jpg" alt="imagen1" className="imagen-recuadro" />
                </div>    
                <div className="recuadro">
                    <p className="texto-tipos-obras">
                        Obras Abstractas
                    </p>
                </div>
            </div>
            <div className="cuadroArte2">
                <div className="imgFondo1">  
                    <img src="https://blog.delapaz.com.py/wp-content/uploads/2021/03/ae408a18-ddc5-411f-8832-57ab2b882d69-1024x1024.jpg" alt="imagen2" className="imagen-recuadro"/>          
                </div>    
                <div className="recuadro">
                    <p className="texto-tipos-obras">
                        Compra tu Arte
                    </p>
                </div>
            </div>
            <div className="cuadroArte3">
                <div className="imgFondo1">                  
                    <img src="https://images.pexels.com/photos/4442028/pexels-photo-4442028.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="imagen3" className="imagen-recuadro"/>
                </div>    
                <div className="recuadro">
                    <p className="texto-tipos-obras">
                        Regala Obras
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Recuadros