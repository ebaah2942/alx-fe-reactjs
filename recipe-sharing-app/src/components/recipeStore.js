import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // keep in sync
    })),
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));

