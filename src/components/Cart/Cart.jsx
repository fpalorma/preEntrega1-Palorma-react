import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Button } from "react-bootstrap";
export default function Cart() {
  const { carrito, vaciarCarrito, precioTotal, deleteProduct } =
    useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };
  return (
    <>
      <div className="contenedorGeneralCart">
        <h1 className="cartTitle">Productos en carrito</h1>
        {carrito.length === 0 ? (
          <h2>Aún no has agregado productos al carrito.</h2>
        ) : (
          <>
            {" "}
            <div className="productContainer">
              {carrito.map((prod) => (
                <>
                  <div>
                    <h2 key={prod.id} className="cartCard">
                      {prod.name}
                    </h2>
                    <p className="cartCard">Cantidad: {prod.quantity}</p>
                    <p className="cartCard">
                      Precio final: ${prod.price * prod.quantity}
                    </p>
                  </div>
                  <div className="btnDeleteContainer">
                    <Button
                      style={{ backgroundColor: "red", border: "none" }}
                      onClick={() => handleDelete(prod.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>

                  <hr></hr>
                </>
              ))}
            </div>
            <h3>Total: ${precioTotal}</h3>
            <button onClick={handleVaciar} className="btnVaciar">
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </>
  );
}
