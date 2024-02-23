import React from'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
