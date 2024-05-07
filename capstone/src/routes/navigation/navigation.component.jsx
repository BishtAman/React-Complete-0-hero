import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser)

  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
