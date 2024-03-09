import { useState } from "react";
import "./ItemCount.css";
import Button from "react-bootstrap/Button";

export default function ItemCount() {
  let [cont, setCont] = useState(1);

  const handleClickSuma = () => {
    cont < 5 ? setCont(cont + 1) : alert("No hay stock");
  };
  const handleClickResta = () => {
    cont > 1 ? setCont(cont - 1) : (cont = 0);
  };
  const handleClickBtnAgregar = () => {
    if (cont > 1) {
      console.log("Se agregaron al carrito: " + cont + " productos");
    } else {
      console.log("Se agregó al carrito: " + cont + " producto");
    }
  };

  return (
    <>
      <div className="contenedorGeneral">
        <div className={"item-count-container"}>
          <button onClick={handleClickResta}>-</button>
          <p>{cont}</p>

          <button onClick={handleClickSuma}>+</button>
        </div>
        <Button
          variant="primary"
          className="btnAgregar"
          onClick={handleClickBtnAgregar}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
