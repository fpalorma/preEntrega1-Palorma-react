import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getProductDetail } from "../../asyncMock.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { prodId } = useParams();

  useEffect(() => {
    getProductDetail(prodId)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err));
  }, [prodId]);

  return (
    <>
      <div className="itemDetailContainer">
        <ItemDetail product={product} />
      </div>
    </>
  );
}
