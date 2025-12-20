import { useCart } from "../../contexts/Cart/useCart";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para continuar.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Tu carrito</h2>

      <div className="cart-items">
        {cart.map((p) => (
          <div key={p.id} className="cart-item">
            <img src={p.img} alt={p.name} />

            <div className="cart-item-info">
              <h3 className="cart-item-name">{p.name}</h3>
              <p className="cart-item-qty">Cantidad: {p.quantity}</p>
              <p className="cart-item-price">
                Subtotal: <strong>${p.price * p.quantity}</strong>
              </p>
            </div>

            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(p.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3 className="cart-total">Total: ${total}</h3>

        <button className="finalizar-btn">Finalizar compra</button>

        <button className="clear-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
