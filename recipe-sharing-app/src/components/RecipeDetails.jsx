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
        <FavoriteButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
}

export default function FavoriteButton({ recipeId }) {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

