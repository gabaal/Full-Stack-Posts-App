import React from'react'
import { Link } from'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Daily Post</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
        <Link to="/newCategory">New Category</Link>
      </div>
    </nav>
  )
  
}
