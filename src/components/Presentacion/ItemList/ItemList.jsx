import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <div className="item-list">
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
