import Item from "../Item/Item.jsx";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import "./ItemList.css";
import { useParams } from "react-router-dom";

function ItemList() {
  const [products, setProducts] = useState([]);
  const { catName } = useParams();

  useEffect(() => {
    const asyncFunc = catName ? getProductsByCategory : getProducts;
    asyncFunc(catName)
      .then((res) => setProducts(res))
      .catch((err) => console.log("error " + err));
  }, [catName]);

  return (
    <>
      <div className="itemsContainer">
        {products.map((producto) => (
          <Item key={producto.id} producto={producto}></Item>
        ))}
      </div>
    </>
  );
}

export default ItemList;
