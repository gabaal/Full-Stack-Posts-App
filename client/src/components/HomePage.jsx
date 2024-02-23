import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Import the Modal component

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleMouseEnter = (post) => {
    setHoveredPost(post);
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="HomePage">
      <h1>Welcome to the Daily Post</h1>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2 onMouseEnter={() => handleMouseEnter(post)} onMouseLeave={handleMouseLeave}>
            {post.title}
          </h2>
        </div>
      ))}
      {isModalOpen && hoveredPost && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>{hoveredPost.title}</h2>
          <p>{hoveredPost.post}</p>
          <p>Category: {hoveredPost.category}</p>
        </Modal>
      )}
    </div>
  );
}