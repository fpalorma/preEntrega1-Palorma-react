import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { sendOrder } from "../../firebase/firebase";
import "./Checkout.css";

export default function Checkout() {
  const { carrito, vaciarCarrito, precioTotal, cantidadEnCarrito } =
    useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const productosPedidos = carrito.map((prod) => {
    return {
      id: prod.id,
      name: prod.name,
      quantity: prod.quantity,
      price: prod.price,
    };
  });

  const enviar = async (data) => {
    const date = new Date();
    const pedido = {
      buyer: {
        name: data.name,
        lastName: data.lastName,
        mail: data.mail,
        phone: data.phone,
      },
      pedido: productosPedidos,
      date: date,
      total: precioTotal,
    };
    let tuID = await sendOrder(pedido);
    Swal.fire({
      title: "Pedido confirmado!",
      text: `Gracias ${
        data.name
      } por tu compra el día ${date.getDay()}/${date.getMonth()}. Tu número de pedido es: ${tuID} Nos pondremos en contacto contigo para coordinar el envío y el medio de pago.`,
      icon: "success",
      confirmButtonText: "Volver",
      color: "peru",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        vaciarCarrito();
      }
    });
  };
  return (
    <>
      <div className="resumenContainer">
        <h1>Finalizar compra</h1>
        <h2>Resumen de tu compra:</h2>
        <h4>Productos en carrito: {cantidadEnCarrito} </h4>
        <h4>Precio final: $ {precioTotal}</h4>
      </div>
      <hr />
      <div className="formBuyerContainer">
        <h2>Confirma tus datos para coordinar envío:</h2>
        <form className="formBuyer" onSubmit={handleSubmit(enviar)}>
          <div>
            <label>
              Nombre:
              <input
                type="text"
                placeholder="Introduce tu nombre"
                required
                {...register("name")}
              />
            </label>
            <label>
              Apellido:
              <input
                type="text"
                placeholder="Introduce tu apellido"
                required
                {...register("lastName")}
              />
            </label>
            <label>
              Teléfono:
              <input
                type="phone"
                placeholder="Introduce tu teléfono"
                required
                {...register("phone")}
              />
            </label>
            <label>
              Correo:
              <input
                type="email"
                placeholder="Introduce tu correo"
                required
                {...register("mail")}
              />
            </label>
          </div>
          <div>
            <button type="submit">Finalizar compra</button>
          </div>
        </form>
      </div>
    </>
  );
}
