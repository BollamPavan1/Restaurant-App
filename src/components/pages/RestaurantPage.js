// pages/RestaurantPage.js
import React, {useState, useEffect} from 'react'
import DishCategorySlider from '../components/DishCategorySlider'
import DishItem from '../components/DishItem'
import Cart from '../components/Cart'
import api from '../services/api'

const RestaurantPage = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [dishes, setDishes] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Fetch categories from API and set initial category
    api.getCategories().then(data => {
      setCategories(data)
      setSelectedCategory(data[0].id)
    })
  }, [])

  useEffect(() => {
    // Fetch dishes based on selected category
    if (selectedCategory) {
      api.getDishes(selectedCategory).then(data => setDishes(data))
    }
  }, [selectedCategory])

  const handleAddToCart = dishId => {
    // Add dish to cart
    const updatedCart = [...cartItems]
    const existingCartItem = updatedCart.find(item => item.id === dishId)

    if (existingCartItem) {
      existingCartItem.count += 1
    } else {
      const dishToAdd = dishes.find(dish => dish.id === dishId)
      updatedCart.push({...dishToAdd, count: 1})
    }

    setCartItems(updatedCart)
  }

  const handleRemoveFromCart = dishId => {
    // Remove dish from cart
    const updatedCart = cartItems.filter(item => item.id !== dishId)
    setCartItems(updatedCart)
  }

  return (
    <div>
      <DishCategorySlider
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <Cart cartItems={cartItems} />
      <div>
        {dishes.map(dish => (
          <DishItem
            key={dish.id}
            dish={dish}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantPage
