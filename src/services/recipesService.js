import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

const RecipesService = {
  getAllRecipes: async () => {
    try {
      const response = await axios.get(BASE_URL+'/recipes');
      return response.data; 
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error; 
    }
  },
};

export default RecipesService;
