import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId); // ✅ call the store action
    navigate("/"); // ✅ redirect to home
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
