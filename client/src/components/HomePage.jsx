import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import "./homePage.css"

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getPosts();
  }, []);
  
  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    setPosts(posts.filter(post => post.id!== postId));
    alert('Post deleted');
  } catch (error) {
    console.log('Error deleting post:', error);
    alert('Error deleting post');
  }
}
  
  
  return (
    <div className="HomePage">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
            <p>{post.post}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}