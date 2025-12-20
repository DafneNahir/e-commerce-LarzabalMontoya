import { useState } from "react";
import { useCart } from "../../contexts/Cart/useCart";
import { useAuth } from "../../contexts/Auth/useAuth";
import { createOrder } from "../../Service/order";
import { useNavigate } from "react-router";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    setError(false);

    const order = {
      buyer: {
        uid: user.uid,
        email: user.email,
      },
      items: cart.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      })),
      total,
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="page-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <p> Total a pagar: <strong>${total}</strong> </p>
          <button onClick={handleCheckout} disabled={loading}>
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>

          {error && <p className="error">No se pudo generar la orden</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
