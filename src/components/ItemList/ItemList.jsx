import Item from "../Item/Item.jsx";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

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
      {products.length > 0 ? (
        <div className="itemsContainer">
          {products.map((producto) => (
            <Item key={producto.id} producto={producto}></Item>
          ))}
        </div>
      ) : (
        <Spinner
          animation="border"
          variant="warning"
          className="spinner"
          style={{ marginLeft: "50%" }}
        />
      )}
    </>
  );
}

export default ItemList;
