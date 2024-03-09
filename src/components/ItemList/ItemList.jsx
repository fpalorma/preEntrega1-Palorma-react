import Item from "../Item/Item.jsx";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock.js";
import "./ItemList.css";

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="itemsContainer">
        <Item producto={products}></Item>
      </div>
    </>
  );
}

export default ItemList;
