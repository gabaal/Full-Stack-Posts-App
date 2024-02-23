import React, { useState, useEffect } from'react';
import "./addCategory.css"

export default function AddCategory() {
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      });

      if (!response.ok) {
        throw new Error('Failed to add category');
      }

      setCategory('');
      alert('Category added successfully!');
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category');
    }
  };

  return (
    <div className="AddCategory">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category Name:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}