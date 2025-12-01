import "./Item.css";

const Item = ({ producto }) => {
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="item-card">
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default Item;
