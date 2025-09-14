import { Link, useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate("/")} />
      </div>

      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
}
