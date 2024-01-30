import React from 'react'

const CartContext = React.createContext({
  cart: [],
  addItems: (items) => {},
  removeItem: (items) => {},
  menuItems: [],
  addToMenu: (items) => {}
});

export default CartContext;

