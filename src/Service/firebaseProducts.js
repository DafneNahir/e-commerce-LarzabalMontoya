import { collection, getDocs, getDoc, doc, query, where, } from "firebase/firestore";
import { db } from "../Service/firebase";

const productsRef = collection(db, "Joyeria");

// Todos los productos
export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

// Por categoría
export const getProductsByCategory = async (categoryId) => {
  const q = query(productsRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

// Por subcategoría
export const getProductsBySubcategory = async (subcategoryId) => {
  const q = query(productsRef, where("subcategory", "==", subcategoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

// Producto individual
export const getProductById = async (id) => {
  if (!id) return null;

  const ref = doc(db, "Joyeria", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};
