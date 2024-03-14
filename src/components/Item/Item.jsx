/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ producto }) {
  const { id, img, name, breve, price } = producto;
  return (
    <>
      <Card style={{ width: "18rem" }} key={id}>
        <Card.Img
          variant="top"
          src={img}
          alt={name}
          style={{ maxHeight: "180px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Precio: ${price}
          </Card.Subtitle>
          <Card.Text>{breve}</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
