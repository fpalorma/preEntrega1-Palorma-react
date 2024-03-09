import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx";

// eslint-disable-next-line react/prop-types
function ItemListContainer({ greeting }) {
  return (
    <>
      <section>
        <h1 className="titulo">{greeting}</h1>
      </section>
      <main >
        <section>
          <ItemList></ItemList>
        </section>
        <section>
          <ItemDetailContainer></ItemDetailContainer>
        </section>
      </main>
    </>
  );
}

export default ItemListContainer;
