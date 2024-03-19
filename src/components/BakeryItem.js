// TODO: create a component that displays a single bakery item
import React from 'react';

// OK: Assuming you have a CSS file where your styles are defined
import './BakeryItem.css';

function BakeryItem(props) {
  const { name, description, price, image, addToCart } = props;

  return (
    <div className="BakeryItem">
    <div className="bakery-item">
      <div className="bakery-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="bakery-item-info">
      <div className="bakery-item-text">
         <h3 className="bakery-item-name" >{name}</h3> 
        <p>{description}</p>
        </div>
        <div className="bakery-item-purchase">
          <span className="price">${price}</span>
          <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default BakeryItem;
