import "./checkout-item.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {

  const { 

    addItemToCart, 
    removeItemToCart, 
    clearItemToCart 

} =  useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;
  
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemToCart(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItemToCart(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
