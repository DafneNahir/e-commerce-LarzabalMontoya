import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Presentacion/Loader/Loader";
import ItemCard from "../../Presentacion/ItemCard/ItemCard";
import { getProducts, getProductsByCategory, getProductsBySubcategory } from "../../../Service/firebaseProducts";
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

        setItems(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, subcategoryId]);

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
      ) : items.length > 0 ? (
          <div className="cards-grid">
            {items.map((item) => (
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
