import "./styles.css";
import MiImagen from "../../assets/carrito.png";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={MiImagen} className="logo-carrito"/>
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;