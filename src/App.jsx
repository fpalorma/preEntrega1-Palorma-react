import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contacto/Contacto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
