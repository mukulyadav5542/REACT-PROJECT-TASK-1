import React, { useState } from "react";
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import MedicineForm from "./components/MedicineShop/MedicineForm";

function App() {

  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  };

  const hideCartHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <Header showCartHandler= {showCartHandler} />
      {show && <Cart onClose={hideCartHandler} />}
      <MedicineForm /> 
    </div>
  )
}

export default App
