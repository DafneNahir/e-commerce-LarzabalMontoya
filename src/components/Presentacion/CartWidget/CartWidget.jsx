import { useState } from "react";
import MiImagen from "../../../assets/carrito.png";
import "./CartWidget.css";

const CartWidget = ({ cartCount }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <>
      {open && <div className="cart-overlay show" onClick={handleClose}></div>}

    <div className="cart-widget-container">
      <img src={MiImagen} alt="carrito" className="cart-icon" onClick={handleToggle} />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}

      <div className={`cart-dropdown ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>
        <p>Aún no hay nada en tu carrito</p>
      </div>
    </div>
  </>
  );
};

export default CartWidget;
