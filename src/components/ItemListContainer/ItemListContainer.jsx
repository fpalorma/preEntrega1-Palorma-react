import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";


// eslint-disable-next-line react/prop-types
function ItemListContainer({ greeting }) {
  return (
    <>
      <section>
        <h1 className="titulo">{greeting}</h1>
      </section>
      <main>
        <section className="items-container">
          <ItemList></ItemList>
        </section>
        
      </main>
    </>
  );
}

export default ItemListContainer;
