import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Presentacion/Loader/Loader";
import ItemCard from "../../Presentacion/ItemCard/ItemCard";
import { getProducts, getProductsByCategory, getProductsBySubcategory, } from "../../../Service/firebaseProducts";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId, subcategoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        let data;
        if (subcategoryId) {
          data = await getProductsBySubcategory(subcategoryId);
        } else if (categoryId) {
          data = await getProductsByCategory(categoryId);
        } else {
          data = await getProducts();
        }

        const sortedData = [...data].sort((a, b) => {
          if (a.category < b.category) return -1;
          if (a.category > b.category) return 1;
          return a.name.localeCompare(b.name);
        });
        setItems(sortedData);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId, subcategoryId]);

  const groupedByCategory =
    !categoryId && !subcategoryId
      ? items.reduce((acc, item) => {
          const category = item.category || "Otros";
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {})
      : null;

  return (
    <div className="item-list-container">
      <div className="top-bar">
        <h2 className="productos">Productos</h2>
      </div>

      {loading ? (
        <div className="loading-area">
          <p>Cargando productos...</p>
          <Loader />
        </div>
      ) : items.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : groupedByCategory ? (
        Object.entries(groupedByCategory).map(([category, products]) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="cards-grid">
              {products.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="cards-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
