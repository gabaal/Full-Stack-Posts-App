import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import "./allPosts.css"

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setPosts(jsonData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setCategories(jsonData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchPosts();
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDeletePost = async (postId) => {
    try {
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'DELETE',
      });

      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  
  const handleLikePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to like post');
      }

      const updatedPost = await response.json();

      setPosts(posts.map(post => post.id === postId ? { ...post, likes: parseInt(updatedPost.likes) } : post));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };
  

  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <div className="title-filter-container">
        <h1>All Posts</h1>
        <div className="filter-container">
          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">All</option>
            {categories.map(category => (
              <option key={category.id} value={category.category}>{category.category}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {filteredPosts.map(post => (
          <div key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <button className="delete-button" onClick={() => handleDeletePost(post.id)}>Delete</button>
            <p>{post.post}</p>
            <p className="post-category">Category: {post.category}</p>
            <div className="like-container" onClick={() => handleLikePost(post.id)}>
              <div className="likes">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}