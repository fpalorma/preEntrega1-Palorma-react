import { Link } from "react-router-dom";

function CartWidget() {
  let estiloCarrito = {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.3em",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <>
      <button style={estiloCarrito}>
        {" "}
        <Link to={"/cart"} style={{ color: "white" }}>
          {" "}
          <i className="bi bi-cart4"> </i>
        </Link>
      </button>

      <p>0</p>
    </>
  );
}

export default CartWidget;
