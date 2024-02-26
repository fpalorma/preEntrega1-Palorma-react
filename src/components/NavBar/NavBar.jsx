import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"

function NavBar() {
  const estilos = {
    color: "white",
    fontFamily: "arial",
    fontSize: "1.5rem",
    marginBlock:"auto"
  }


    return (
      <nav className="nav">
        <h3 style={estilos}>miCafé</h3>
        <div className="enlacesContenedor">
            <ul>
                <li className="enlaceMenu"><a href="#Home">Home</a></li>
                <li className="enlaceMenu"><a href="#Nosotros">Nosotros</a></li>
                <li className="enlaceMenu"><a href="#Contacto">Contacto</a></li>
            </ul>
        </div>
        <div className="contenedorCarrito">
            <CartWidget />
        </div>
      </ nav>
    )
  }
  
  export default NavBar