import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const { recipes, setRecipes } = useRecipeStore();
  const navigate = useNavigate(); // ✅ navigation after delete

  const handleDelete = () => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
    navigate("/"); // ✅ redirect to home after delete
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
