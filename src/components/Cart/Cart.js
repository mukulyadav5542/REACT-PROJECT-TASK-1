import React, { useContext } from 'react';
import CartContext from '../Store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.cart.reduce((total, element) => (
    total + element.quantity * element.price
  ), 0)

  const hasItem = cartCtx.cart.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <h1>Cart</h1>
      {cartCtx.cart.map((item, index) => (
        <li className={classes['cart-item']}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{item.price}</span>
              <span className={classes.amount}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>(cartCtx.removeItems(item))}>−</button>
            <button onClick={()=>(cartCtx.addItems(item))}>+</button>
          </div>
        </li>
      ))}
<h3>Total Amount:{totalAmount}</h3>
<div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
