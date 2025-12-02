import products from "./products.json";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async () => {
  await delay(1000);
  return products;
};

export const getProductsByCategory = async (categoryId) => {
  await delay(1000);
  return products.filter(prod => prod.category === categoryId);
};

export const getProductsBySubcategory = async (subcategoryId) => {
  await delay(1000);
  return products.filter(prod => prod.subcategory === subcategoryId);
};

export const getProductById = async (id) => {
  await delay(1000);
  return products.find(prod => prod.id === id);
};

