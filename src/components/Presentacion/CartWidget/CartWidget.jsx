import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/Cart/CartContext";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useCart } from "../../../contexts/Cart/useCart";
import { useNavigate } from "react-router";
import { createOrder } from "../../../Service/order";
import images from "../../../assets/imageImports";
import MiImagen from "../../../assets/carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const [open, setOpen] = useState(false);
  const [showCheckoutMsg, setShowCheckoutMsg] = useState(false);
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const toggleCart = () => setOpen(!open);

  const goToIngresar = () => {
    setShowCheckoutMsg(false);
    setOpen(false);
    navigate("/ingresar");
  };

  const handleCheckout = async () => {
    if (!user) {
      setShowCheckoutMsg(true);
      return;
    }
    setProcessing(true);

    const order = {
      buyer: {
        uid: user.uid,
        email: user.email,
      },
      items: cart.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      })),
      total,
    };

    try {
      const orderId = await createOrder(order);
      clearCart();
      setOpen(false);
      navigate(`/order/${orderId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      {open && <div className="cart-overlay show" onClick={toggleCart}></div>}

      <div className="cart-widget-container">
        <img src={MiImagen} alt="carrito" className="cart-icon" onClick={toggleCart} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}

        <div className={`cart-panel ${open ? "open" : ""}`}>
          {cart.length === 0 ? (
            <p className="empty-msg">Aún no hay nada en tu carrito</p>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={images[item.img]} alt={item.name} className="cart-item-img" />

                    <div className="cart-info">
                      <h4>{item.name}</h4>
                      <p>${item.price}</p>

                      <div className="qty-controls">
                        <button className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1} >
                          –
                        </button>

                        <span>{item.quantity}</span>

                        <button className="qty-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)} >
                          +
                        </button>
                      </div>
                    </div>

                    <button className="delete-btn"
                      onClick={() => removeFromCart(item.id)} >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <p className="total">Total: ${total}</p>

                <button className="checkout-btn"
                  onClick={handleCheckout}
                  disabled={processing} >
                  {processing ? "Procesando..." : "Finalizar compra"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showCheckoutMsg && (
        <div className="checkout-modal">
          <div className="checkout-box">
            <h3>Resumen de tu compra</h3>
            <p>Productos: <strong>{cartCount}</strong></p>
            <p>Total: <strong>${total}</strong></p>
            <p className="checkout-info"> Para finalizar la compra inicia sesión. </p>

            <div className="checkout-actions">
              <button className="checkout-login" onClick={goToIngresar}>
                Iniciar sesión
              </button>
              <button className="checkout-close"
                onClick={() => setShowCheckoutMsg(false)} >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
