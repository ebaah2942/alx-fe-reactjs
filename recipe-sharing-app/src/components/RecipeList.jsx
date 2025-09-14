import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";


export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}
          >
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <div>
              <Link
                to={`/recipes/${recipe.id}/edit`}
                style={{ marginRight: 8 }}
              >
                Edit
              </Link>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
