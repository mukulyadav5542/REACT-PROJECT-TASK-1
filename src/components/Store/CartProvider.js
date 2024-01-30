import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const addToMenu = (newItem) => {
    const updateNewItems = { ...newItem, id: Math.random().toFixed(2) };
    setMenuItems([...menuItems, updateNewItems]);
  };

  const addItems = (newItem) => {
    const menuItemIndex = menuItems.findIndex((item) => item.id === newItem.id);
    const menuItem = menuItems[menuItemIndex];

    if (menuItem.quant === 0) {
      alert("Medicine out of stock");
      return;
    } else {
      const updatedMenu = { ...menuItem, quant: menuItem.quant - 1 };
      const updatedMenuItems = [...menuItems];
      updatedMenuItems[menuItemIndex] = updatedMenu;
      setMenuItems(updatedMenuItems);
    }

    const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);
    const existingItem = cart[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = updatedItem;
      setCart(updatedCart);
    } else {
      const updatedItem = {
        ...newItem,
        quantity: 1,
      };

      const updatedCart = [...cart, updatedItem];
      setCart(updatedCart);
    }
  };

  const removeItems = (deletingItem) => {
    console.log(deletingItem);
    const menuItemIndex = menuItems.findIndex(
      (item) => item.id === deletingItem.id
    );
    const menuItem = menuItems[menuItemIndex];
    const updatedMenu = { ...menuItem, quant: menuItem.quant + 1 };
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[menuItemIndex] = updatedMenu;
    setMenuItems(updatedMenuItems);

    const deleteItemIndex = cart.findIndex((item) => item.id === deletingItem.id);
    if (deletingItem.quantity === 1) {
      const updatedItem = cart.filter((item) => item.id !== deletingItem.id);
      setCart(updatedItem);
    } else {
      const updatedItem = {
        ...deletingItem,
        quantity: deletingItem.quantity - 1,
      }

      const updatedCart = [...cart];
      updatedCart[deleteItemIndex] = updatedItem;
      setCart(updatedCart);
    }
  };

  const obj = {
    cart,
    menuItems,
    addToMenu,
    addItems,
    removeItems,
  };

  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
