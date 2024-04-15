import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contacto/Contacto.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='*' element={<h1> Esta página no existe... </h1>} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/products"
              element={
                <ItemListContainer
                  greeting={"Bienvenido! aquí encontrarás nuestros productos"}
                />
              }
            />
            <Route
              exact
              path="/products/:prodId"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="category/:catName"
              element={<ItemListContainer />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
