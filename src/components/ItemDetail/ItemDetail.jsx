/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ product }) {
  const [quantityAdded, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    console.log({ ...product, quantity});
  };

  const handleOnCancelBtn = () => {
    setQuantity(0);
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
        <Card.Img variant="top" src={`../${product.img}`} alt={name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Stock disponible: {product.stock}</ListGroup.Item>
        </ListGroup>

        <div className="itemCountContainer">
          {quantityAdded > 0 ? (
            <div className="contenedor-btns">
              <Button onClick={handleOnCancelBtn}>Cancelar</Button>
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
            <ItemCount stock={product.stock} onAdd={handleOnAdd} />
          )}
        </div>
      </Card>
    </>
  );
}
