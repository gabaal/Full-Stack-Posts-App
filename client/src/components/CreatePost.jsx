import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import "./createPost.css"

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [categoryId, setCategoryId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const postData = {
        title,
        post,
        category_id: categoryId !== '' ? parseInt(categoryId) : null, // Ensure categoryId is sent as an integer or null
      };

      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear form fields after successful post creation
      setTitle('');
      setPost('');
      setCategoryId(null); // Reset categoryId after successful post creation

      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    }
  };

  return (
    <div className="CreatePost">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category ID (optional):</label>
          <input
            type="number"
            id="category"
            value={categoryId !== null ? categoryId : ''}
            onChange={(e) => setCategoryId(e.target.value !== '' ? e.target.value : null)} // Ensure categoryId is stored as string
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}