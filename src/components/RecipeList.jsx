import React from 'react'
import { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar'
const RecipeList = () => {

  const [searchRecipe, setSearchRecipe] = useState('');
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')


  const searchreicelist = async (query) => {
    if (!query) return;
      const recipeApi = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
      const response = await fetch(recipeApi);
      const data = await response.json();
      console.log(data)
      setRecipes(data.recipes || []);
    
  };

  useEffect(() => {
    searchreicelist(query);
  }, [query]);

  const HandleSearchChange = (e) => {
    setSearchRecipe(e.target.value)
  };
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(searchRecipe);
  }
  return (
    <div>
      <div>
        <Searchbar searchRecipe={searchRecipe}
          HandleSearchChange={HandleSearchChange}
          HandleFormSubmit={HandleFormSubmit} />
      </div>
      <div className='flex justify-center mt-4 font-sans text-2xl p-4'>
        <h1>Find Your Pizza Recipe Here...</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {recipes.map((recipe) => (
          <a
            key={recipe.recipe_id}
            href={recipe.publisher_url}
            target="_blank"
            className="flex flex-col bg-gray-500 p-2 rounded-lg shadow-md gap-2"
          >
           <div className=''>
           <img
              className="rounded-t-lg w-full h-[150px] object-cover"
              src={recipe.image_url}
              alt={recipe.title}
            />
           </div>
            <div className="flex flex-col justify-between p-2 items-start w-full h-full   ">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                {recipe.title}
              </h5>
              <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 ">
                {recipe.publisher}
              </p>
              <a href={recipe.publisher_url} target="_blank" className=' '>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  View More
                </button>
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
    
  )
}

export default RecipeList






