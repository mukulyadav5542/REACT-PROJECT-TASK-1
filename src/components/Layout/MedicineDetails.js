import React from 'react'

const MedicineDetails = (props) => {
  return (
    <div>
        <form>
        <h1>Medicine Details</h1>
        {
            props.user.map((user, index) => (
                user  && <li key={index}> {user.name} - {user.description} - {user.price} - <label>Quantity:</label> - <input type="number" defaultValue="1" /> - <button>+Add to Cart</button> </li>
            )) 
        }
        </form>
    </div>
  )
}

export default MedicineDetails