import React from "react"
import Item from "./Item";
import { toCapital } from "./toCapital";
// import CardList from "./CardList"
// import {Col} from "react-bootstrap"


const ItemList = ( {productos, titulo} ) => {

    return (
      <div className="container">
          <h2 className="titulo-principal">{toCapital(titulo)}</h2>
  
          <div className="productos">
              { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
          </div>
      </div>
    )
  }
  
  export default ItemList

// const ItemList = ({items}) => {
//     return (
//         <>
//             {
//                 items.map ( (item) => (
//                     <Col lg={3} key={item.id}>
//                         <CardList item={item} />
//                     </Col>
//                 ))
//             }
//         </>
//     )
// }
// export default ItemList