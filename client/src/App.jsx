import React from'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import AddCategory from './components/AddCategory';
import AllPosts from './components/AllPosts';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/newCategory" element={<AddCategory />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
