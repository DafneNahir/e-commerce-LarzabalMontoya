import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd }) => {
  if (!producto) return <Loader />;

  return (
    <div className="item-detail">
      <h2>{producto.nombre}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <div className="item-count-wrapper">
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
