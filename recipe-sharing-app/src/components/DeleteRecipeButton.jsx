import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ id, onDeleted }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    // cheap confirmation — replace with a custom modal if you want
    if (!window.confirm("Delete this recipe?")) return;
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return <button onClick={handleDelete}>Delete</button>;
}
