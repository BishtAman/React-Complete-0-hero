import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }
  return (

      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))) : <span className="empty-message">Your cart is empty</span>}
        </div>
        
          <Button onClick={goToCheckoutHandler} type="button" buttonType="submit">
            GO TO CHECKOUT
          </Button>

      </div>

  );
};

export default CartDropdown;
