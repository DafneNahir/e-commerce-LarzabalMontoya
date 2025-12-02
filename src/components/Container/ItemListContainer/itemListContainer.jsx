import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Presentacion/Loader/Loader";
import ItemCard from "../../Presentacion/ItemCard/ItemCard";
import products from "../../../data/products.json";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId, subcategoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getProducts = () =>
      new Promise((resolve) => setTimeout(() => resolve(products), 1000));

    getProducts().then((data) => {
      let result = data;

      if (categoryId) {
        result = result.filter((p) => p.category === categoryId);
      }

      if (subcategoryId) {
        result = result.filter((p) => p.subcategory === subcategoryId);
      }

      setFiltered(result);
      setLoading(false);
    });
  }, [categoryId, subcategoryId]);

  return (
    <div className="item-list-container">
      <h2 className="productos">Productos</h2>

      {loading ? (
        <Loader />
      ) : filtered.length > 0 ? (
        <div className="cards-grid">
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ItemListContainer;