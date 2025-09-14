import { Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import './App.css'

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

      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </Router>
    </div>
  );
}
