import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <main className="item-list-container">
      <h2 className="eslogan">{greeting}</h2> 
      <p className="productos">Próximamente los productos de nuestra marca...</p>
    </main>
  );
};

export default ItemListContainer;