import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: recipeId,
      title: title.trim(),
      description: description.trim(),
    });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: 8, padding: 8 }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: "block", marginBottom: 8, padding: 8 }}
      />

      <button type="submit" style={{ marginRight: 8 }}>
        Save
      </button>
      <Link to={`/recipes/${recipeId}`}>Cancel</Link>
    </form>
  );
}
