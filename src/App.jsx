import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"Bienvenido! aquí encontrarás nuestros productos"}
      />
    </>
  );
}

export default App;
