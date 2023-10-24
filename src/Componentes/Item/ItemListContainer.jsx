import React, {useState, useEffect } from "react";
import {Row} from "react-bootstrap"
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { infodb } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const productosRef = collection(infodb, "productos");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    return (
        <Container className="fondo">
            <Row>
                <ItemList productos={productos} titulo={titulo} />
            </Row>
        </Container>
    )
}

//  export const PedirId = (id) => {
//     return new Promise((res, rej) => {

//         const producto = fetch('https://fakestoreapi.com/products').find((element) => element.id === id);
//         if (producto) {
//             res(producto)
//         } else {
//             rej({
//                 error: "No se encontro lo que busca"
//             })
//         }

//     })

// }

export default ItemListContainer