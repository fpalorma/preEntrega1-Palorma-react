import "./Contacto.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const enviar = (data) => {
    Swal.fire({
      title: "Mensaje enviado!",
      text: `Gracias ${data.nombre} por comunicarte con nosotros.`,
      icon: "success",
      confirmButtonText: "Volver",
      color: "peru",
    });
  };
  return (
    <>
      <h1>Contáctanos</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <label>
          Nombre:
          <input
            type="text"
            placeholder="Introduce tu nombre"
            required
            {...register("nombre")}
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            placeholder="Introduce tu correo"
            required
            {...register("correo")}
          />
        </label>
        <label>
          Mensaje:
          <textarea
            type="text"
            placeholder="Déjanos tu mensaje"
            required
            {...register("mensaje")}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
