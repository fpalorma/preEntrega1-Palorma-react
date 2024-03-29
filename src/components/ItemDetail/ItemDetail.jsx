/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

export default function ItemDetail({ product }) {
  const [quantityAdded, setQuantity] = useState(0);

  const { carrito, setCarrito } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    const productoAgregado = {
      ...product,
      quantity,
      // stock: product.stock - quantity,
    };
    let newCart = [...carrito];
    const isInCart = newCart.find((prod) => prod.id === productoAgregado.id);
    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(productoAgregado);
    }
    setCarrito(newCart);
  };

  return (
    <>
      <Card
        style={{
          width: "22rem",
          marginTop: "20px",
          boxShadow: "10px 5px 20px gray",
        }}
      >
        <Card.Img variant="top" src={`../${product.img}`} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
          {product.stock >= 1 ? (
            <ListGroup.Item>Stock disponible: {product.stock}</ListGroup.Item>
          ) : (
            <ListGroup.Item>
              Stock disponible:{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                Sin stock
              </span>
            </ListGroup.Item>
          )}
        </ListGroup>

        <div className="itemCountContainer">
          {quantityAdded > 0 ? (
            <div className="contenedor-btns">
              <Button>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/products"}
                >
                  Volver
                </Link>
              </Button>
              <Button>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/cart"}
                >
                  Ver carrito
                </Link>
              </Button>{" "}
            </div>
          ) : (
            <ItemCount
              stock={product.stock}
              onAdd={handleOnAdd}
              disabled={product.stock == 0}
            />
          )}
        </div>
      </Card>
    </>
  );
}
