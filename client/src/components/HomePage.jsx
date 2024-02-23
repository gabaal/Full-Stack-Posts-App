import React, { useState, useEffect } from 'react';
import Modal from './Modal';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [hoveredPost, setHoveredPost] = useState(null);

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

  return (
    <div className="HomePage">
      <h1>Welcome to the Daily Post</h1>
      <h2>A collection of posts from current affairs to the weather. Here are the latest posts:</h2>
      {posts.slice(0, 7).map(post => (
        <div key={post.id} className="post">
          <h3 onMouseEnter={() => setHoveredPost(post)} onMouseLeave={() => setHoveredPost(null)}>
            {post.title}
          </h3>
        </div>
      ))}
      {hoveredPost && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{hoveredPost.post}</p>
          </div>
        </div>
      )}
    </div>
  );
}
