import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getProductDetail } from "../../asyncMock.js";
import { useState, useEffect } from "react";
import "./ItemDetailContainer.css"


export default function ItemDetailContainer() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProductDetail(1)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="itemDetailContainer">
        <ItemDetail {...products} />
      </div>
      
    </>
  );
}
