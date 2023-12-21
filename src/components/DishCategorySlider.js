// components/DishCategorySlider.js
import React from 'react'

const DishCategorySlider = ({categories, onSelectCategory}) => {
  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishCategorySlider
