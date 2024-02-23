import React, { useState, useEffect } from 'react';
import "./allPosts.css"

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setPosts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Remove the deleted post from the state
      setPosts(posts.filter(post => post.id !== postId));

      alert('Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  return (
    <div className="AllPosts">
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <h2>{post.title}</h2>
            <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
          <p>{post.post}</p>
          <p>Category: {post.category}</p>
        </div>
      ))}
    </div>
  );
}



