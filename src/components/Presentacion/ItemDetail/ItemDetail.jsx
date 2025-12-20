import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import { useCart } from "../../../contexts/Cart/useCart";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart();
  if (!producto) return <Loader />;

  const handleAdd = (quantity) => {
    const productForCart = {
      id: producto.id,
      name: producto.name || producto.nombre,
      price: producto.price || producto.precio,
      descripcion: producto.descripcion,
      img: producto.img,
    };

    addToCart(productForCart, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{producto.name || producto.nombre}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: ${producto.price || producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>

      <div className="item-count-wrapper">
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
      {!added ? (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      ) : (
        <p className="added-msg">Producto agregado al carrito ✔</p>
      )}
    </div>
  );
};

export default ItemDetail;
