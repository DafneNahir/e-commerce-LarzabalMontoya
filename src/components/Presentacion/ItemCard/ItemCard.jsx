import { Link } from "react-router";
import { useCart } from "../../../contexts/Cart/useCart";
import images from "../../../assets/imageImports";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  if (!item) return null;

  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault(); // evita que el Link navegue
    e.stopPropagation();
    const productForCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      descripcion: item.descripcion,
      img: item.img,
    };

    addToCart(productForCart, 1);
  };

  return (
    <Link to={`/producto/${item.id}`} className="item-card-link">
      <div className="item-card">
        <div className="item-img-container">
          <img src={images[item.img]} alt={item.name} className="item-img" />
        </div>

        <div className="item-info">
          <h3>{item.name}</h3>
        </div>

        <div className="item-precio-hover">
          <div></div>
          <div></div>
          <div className="precio-container">
            <p className="precio-text">${item.price}</p>
          </div>
          <div></div>
          <span className="add-btn" onClick={handleAdd}>+</span>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
