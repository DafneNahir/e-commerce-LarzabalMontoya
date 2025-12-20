import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/firebase";
import "./Order.css";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const ref = doc(db, "orders", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setOrder({ id: snap.id, ...snap.data() });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="page-container">
        <p>Cargando orden...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="page-container">
        <h2>Orden no encontrada</h2>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="page-container order-page">
      <h2>¡Gracias por tu compra!</h2>

      <p className="order-id">
        Número de orden: <strong>{order.id}</strong>
      </p>

      <div className="order-summary">
        {order.items.map((item) => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>
              {item.quantity} × ${item.price}
            </span>
          </div>
        ))}
      </div>

      <h3>Total pagado: ${order.total}</h3>

      <button onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};

export default Order;
