import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getProductDetail } from "../../firebase/firebase.js";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { CartContext } from "../../context/CartContext";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { carrito } = useContext(CartContext);
  const { prodId } = useParams();

  useEffect(() => {
    let ignore = false
    if (!ignore){
      getProductDetail(prodId)
      .then((res) => {
        const newCart = [...carrito];
        const isInCart = newCart.find((prod) => prod.id === res.id);
        if (isInCart) {
          setProduct({ ...res, stock: isInCart.stock-isInCart.quantity });
        } else {
          setProduct(res);
        }
      })
      .catch((err) => console.log(err));
    }
    return ()=>{
      ignore = true
    }
    
  }, [prodId, carrito]);

  return (
    <>
      <div className="itemDetailContainer">
        <ItemDetail product={product} />
      </div>
    </>
  );
}
