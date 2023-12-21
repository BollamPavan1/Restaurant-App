// components/DishItem.js
import React from 'react'

const DishItem = ({dish, onAddToCart, onRemoveFromCart}) => {
  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      {dish.addoncat && <p>Customizations available</p>}
      <button onClick={() => onRemoveFromCart(dish.id)}>-</button>
      <span>{dish.count}</span>
      <button onClick={() => onAddToCart(dish.id)}>+</button>
    </div>
  )
}

export default DishItem
