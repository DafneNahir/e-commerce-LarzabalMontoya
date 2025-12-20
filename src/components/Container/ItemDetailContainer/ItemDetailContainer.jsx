import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../Presentacion/ItemDetail/ItemDetail";
import Loader from "../../Presentacion/Loader/Loader";
import { getProductById } from "../../../Service/firebaseProducts";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(productId).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [productId]);

  return (
    <div className="item-detail-container">
      {loading ? <Loader /> : <ItemDetail producto={product} />}
    </div>
  );
};

export default ItemDetailContainer;
