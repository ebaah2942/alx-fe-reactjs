import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import './App.css'
// import { useRecipeStore } from './recipeStore'

// import useRecipeStore from './recipeStore'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//         <h1>Recipe Sharing App</h1>
//         <AddRecipeForm />
//         <RecipeList />
//       </div>
      
//     </>
//   )
// }

// export default App
export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <header style={{ marginBottom: 20 }}>
        <h1>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Recipe Sharing App
          </Link>
        </h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}
