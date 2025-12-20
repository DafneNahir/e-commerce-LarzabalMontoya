import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const sendContactMessage = async (data) => {
  const ref = await addDoc(collection(db, "contact"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return ref.id;
};
