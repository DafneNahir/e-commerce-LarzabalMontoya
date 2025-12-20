import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Service/firebase";

// referencia a la colección orders
const ordersRef = collection(db, "orders");

export const createOrder = async (order) => {
  if (!order || order.items.length === 0) {
    throw new Error("Orden inválida");
  }

  const docRef = await addDoc(ordersRef, {
    ...order,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};
