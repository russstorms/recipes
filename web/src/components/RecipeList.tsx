// src/components/RecipeList.tsx

import React, { useEffect, useState } from 'react';
import { recipeContainer, recipeItem, recipeTitle } from '../styles.css';

interface Recipe {
  id: number;
  name: string;
  ingredients: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Recipe[] = await response.json();
        setRecipes(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={recipeContainer}>
      <h2>My Favorite Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={recipeItem}>
          <h3 className={recipeTitle}>{recipe.name}</h3>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
