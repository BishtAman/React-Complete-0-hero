import "./product-card.styles.scss";

import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {


  const { name, price, imageUrl } = product;
  
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
