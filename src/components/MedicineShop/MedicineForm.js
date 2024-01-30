import React, { useContext, useState } from 'react'
import MedicineDetails from './MedicineDetails';
import CartContext from '../Store/CartContext';
import classes from './MedicineForm.module.css';

const MedicineForm = () => {

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const menuCtx = useContext(CartContext);

  const medicineNameHandler = (e) => {
    setMedicineName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  }
  //console.log(menuCtx);

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      name: medicineName, 
      description: description,
      price: price,
      quant: quantity,
    }

    menuCtx.addToMenu(obj);
    //console.log(obj);

    setDescription("");
    setMedicineName("");
    setPrice("");
    setQuantity("");

  };

  return (
    <div className={classes.container}>
        <form onSubmit={submitHandler}>
        <label>Medicine Name: </label>
        <input type="text" placeholder="Enter medicine name" onChange={medicineNameHandler} value={medicineName} />
        <label>Description of Medicine: </label>
        <input type="text" placeholder="Enter medicine description" onChange={descriptionHandler} value={description} />
        <label>Medicine Price: </label>
        <input type="number" placeholder="Enter price" onChange={priceHandler} value={price} /> 
        <label>Quantity: </label>
        <input type="number" placeholder="Enter Quantity" onChange={quantityHandler} value={quantity} />
        <button type="submit">Add Medicine</button>
      </form>
      <MedicineDetails /> 
    </div>
  )
}

export default MedicineForm