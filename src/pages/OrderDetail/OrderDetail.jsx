import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/firebase";

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      const ref = doc(db, "orders", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setOrder({ id: snap.id, ...snap.data() });
      }
      setLoading(false);
    };

    fetchOrder();
  }, [id]);

  if (loading) return <p>Cargando orden...</p>;

  if (!order) return <p>Orden no encontrada</p>;

  return (
    <div className="page-container">
      <h2>¡Gracias por tu compra!</h2>
      <p> Número de orden: <strong>{order.id}</strong> </p>
      <p> Email: <strong>{order.buyer.email}</strong> </p>
      <p> Total abonado: <strong>${order.total}</strong> </p>
      <p>Estado: <strong>Recibida</strong></p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Order;
