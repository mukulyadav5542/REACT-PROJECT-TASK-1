import React, { useContext } from 'react';
import CartContext from '../Store/CartContext';
import classes from './Header.module.css';

const Header = (props) => {

  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.header}>
      <h1>Pharmacy Shop</h1>
      <button className={classes.button} onClick={props.showCartHandler}>Cart: {cartCtx.cart.length} </button>
    </div>
    
  )
}

export default Header