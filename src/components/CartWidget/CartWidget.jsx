import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function CartWidget() {
  let estiloCarrito = {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.3em",
    cursor: "pointer",
    textDecoration: "none",
  };
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <>
      <button style={estiloCarrito}>
        {" "}
        <Link to={"/cart"} style={{ color: "white" }}>
          {" "}
          <i className="bi bi-cart4"> </i>
        </Link>
      </button>

      <p>{cantidadEnCarrito}</p>
    </>
  );
}

export default CartWidget;
