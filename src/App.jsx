
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import "bootstrap-icons/font/bootstrap-icons.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola"}/>
    </>
  )
}

export default App
