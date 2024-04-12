/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const cantidadEnCarrito = carrito.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const precioTotal = carrito.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );

  const deleteProduct = (id) => {
    setCarrito(carrito.filter((prod) => prod.id != id));
  };

  const restarProduct = (id, quantity) => {
    
      const updatedData = carrito.map(obj =>
        obj.id === id ? { ...obj, quantity: quantity-1 } : obj
      );
      setCarrito(updatedData);
    
  };
  const sumarProduct = (id, quantity) => {
    
    const updatedData = carrito.map(obj =>
      obj.id === id ? { ...obj, quantity: quantity+1 } : obj
    );
    setCarrito(updatedData);
  
};

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
        precioTotal,
        deleteProduct,
        restarProduct,
        sumarProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
