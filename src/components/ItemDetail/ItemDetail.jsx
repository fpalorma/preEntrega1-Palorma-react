/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ img, name, description, price, stock }) {
  const [quantityAdded, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
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
        <Card.Img variant="top" src={`../${img}`} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${price}</ListGroup.Item>
          <ListGroup.Item>Stock disponible: {stock}</ListGroup.Item>
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
            <ItemCount stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </Card>
    </>
  );
}
