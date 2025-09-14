import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';





export default function AddRecipeForm() {
const addRecipe = useRecipeStore((s) => s.addRecipe);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if (!title.trim() || !description.trim()) return;

  const newRecipe = {
    id: Date.now(),
    title: title.trim(),
    description: description.trim(),
  };
  addRecipe(newRecipe);

  // reset
  setTitle("");
  setDescription("");

  // optional: navigate to the new recipe's detail page
  navigate(`/recipes/${newRecipe.id}`);
};

return (
  <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      required
      style={{ display: "block", marginBottom: 8, padding: 8 }}
    />

    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      required
      style={{ display: "block", marginBottom: 8, padding: 8 }}
    />

    <button type="submit">Add Recipe</button>
  </form>
);
}

  