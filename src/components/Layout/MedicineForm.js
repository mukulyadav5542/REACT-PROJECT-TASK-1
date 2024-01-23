import React, { useState } from 'react'
import MedicineDetails from './MedicineDetails';

const MeicineForm = () => {

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState([]);

  const medicineNameHandler = (e) => {
    setMedicineName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      name: medicineName, 
      description: description,
      price: price,
    }

    setUser([...user, obj]);

    setDescription("");
    setMedicineName("");
    setPrice("");

  };

  return (
    <div>
        <form onSubmit={submitHandler}>
        <label>Medicine Name: </label>
        <input type="text" placeholder="Enter medicine name" onChange={medicineNameHandler} value={medicineName} />
        <label>Description of Medicine: </label>
        <input type="text" placeholder="Enter medicine description" onChange={descriptionHandler} value={description} />
        <label>Medicine Price: </label>
        <input type="number" placeholder="Enter price" onChange={priceHandler} value={price} /> 
        <button type="submit">Add Medicine</button>
      </form>
      <MedicineDetails user={user} />
    </div>
  )
}

export default MeicineForm