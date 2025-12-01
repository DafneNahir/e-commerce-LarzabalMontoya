import "./ItemCard.css";

const ItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="item-card">
      <div className="item-img-container">
        <img src={item.img} alt={item.name} className="item-img" />
      </div>

      <div className="item-info">
        <h3>{item.name}</h3>
      </div>

      <div className="item-precio-hover">
        <div></div>
        <div></div>
        <div className="precio-container">          
          <p className="precio-text">${item.price}</p>
        </div>
        <div></div>
        <span className="add-btn">+</span>
      </div>
    </div>
  );
};

export default ItemCard;
