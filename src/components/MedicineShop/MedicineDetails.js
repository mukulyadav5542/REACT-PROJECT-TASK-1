import React, { useContext } from 'react';
import CartContext from '../Store/CartContext';
import classes from './MedicineDetails.module.css';


const MedicineDetails = (props) => {

  const menuCtx = useContext(CartContext);
  //console.log(menuCtx);
  return (
    <div className={classes.container}>
        <h1>Available Medicines </h1>
        <hr />
        <ul className={classes.menuItem}>
        {
            menuCtx.menuItems.map((item, index) => (
              <div className={classes.item} key={index}>
                  <h2>{item.name}</h2>
                  <h2>{item.description}</h2>
                  <h2>Rs.{item.price}</h2>
                  <h2>{item.quant}</h2>
                  <button className={classes.button} onClick={()=> menuCtx.addItems(item)}>+Add to Cart</button>
              </div>
            )) 
        }
        </ul>
    </div>
  )
}

export default MedicineDetails;