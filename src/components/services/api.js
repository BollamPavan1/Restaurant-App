// services/api.js
const API_URL = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc';

const api = {
  getCategories: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.categories;
  },
  getDishes: async (categoryId) => {
    const response = await fetch(${API_URL}?category=${categoryId});
    const data = await response.json();
    return data.dishes;
  },
};

export default api;