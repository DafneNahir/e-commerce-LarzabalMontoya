import ItemListContainer from "../../components/Container/ItemListContainer/ItemListContainer";
import "./Pages.css";

const Productos = () => {
  return (
    <div className="page-container">
      <h2>Catálogo de productos</h2>
      <ItemListContainer greeting="Todos los productos disponibles" />
    </div>
  );
};

export default Productos;
