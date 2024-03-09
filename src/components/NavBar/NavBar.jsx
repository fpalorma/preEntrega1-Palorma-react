import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

export default function NavBar() {
  const estilos = {
    color: "white",
  };
  return (
    <Navbar expand="lg" className={("bg-body-tertiary", "nav")}>
      <Container>
        <Navbar.Brand href="#home" style={estilos}>
          mi-Café
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={estilos}>
              Home
            </Nav.Link>
            <Nav.Link href="#Productos" style={estilos}>
              Productos
            </Nav.Link>
            <Nav.Link href="#Contacto" style={estilos}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="contenedorCarrito">
          <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}


