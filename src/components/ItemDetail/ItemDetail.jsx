/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";

export default function ItemDetail({ img, name, description, price, stock }) {
  return (
    <>
      <Card style={{ width: "22rem", marginTop: "20px" }}>
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
          <ItemCount stock={stock} />
        </div>
      </Card>
    </>
  );
}
