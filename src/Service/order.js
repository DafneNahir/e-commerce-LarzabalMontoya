import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const createOrder = async (order) => {
  const ordersRef = collection(db, "orders");

  const docRef = await addDoc(ordersRef, {
    ...order,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};
