/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({  producto }) {

  const { id, img, name, description, price } = producto
  return (
    <>
      
        <Card style={{ width: "18rem" }} key={id}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Precio: ${price}
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
      
    </>
  );
}

export default Item;
