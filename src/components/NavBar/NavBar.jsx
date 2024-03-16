import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

export default function NavBar() {
  const estilos = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <Navbar expand="lg" className={("bg-body-tertiary", "nav")}>
      <Container>
        <Navbar.Brand style={estilos}>
          <Link to={"/"} style={estilos}>
            mi-Café
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} style={estilos}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"} style={estilos}>
              Contacto
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              data-bs-theme="light"
            >
              <NavDropdown.Item as={Link} to={"/products"}>
                Todos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/category/accesorio"}>
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/category/café"}>
                Café
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/category/cafetera"}>
                Cafeteras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="contenedorCarrito">
        <CartWidget />
      </div>
    </Navbar>
  );
}
