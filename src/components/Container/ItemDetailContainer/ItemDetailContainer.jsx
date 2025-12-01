import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../Presentacion/ItemDetail/ItemDetail";
import Loader from "../../Presentacion/Loader/Loader";
import products from "../../../data/products.json";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = () =>
      new Promise(resolve =>
        setTimeout(() => resolve(products.find(p => p.id === productId)), 1000)
      );

    setLoading(true);
    getProduct().then(res => {
      setProduct(res);
      setLoading(false);
    });
  }, [productId]);

  return (
    <div className="item-detail-container">
      {loading ? <Loader /> : <ItemDetail producto={product} onAdd={addToCart} />}
    </div>
  );
};

export default ItemDetailContainer;
