// Set up express
import express from 'express';
const app = express();
app.use(express.json());

// Set up cors
import cors from 'cors';
app.use(cors());

// Set up dotenv
import dotenv from 'dotenv';
dotenv.config();

// Set up Postgres
import pg from 'pg';
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Set up port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Listening on port: ${PORT}`)
);

// Set up root route
app.get('/', (request, response) => {
  response.send('Root route');
});

// Get posts route
app.get('/posts', async (request, response) => {
  const result = await db.query(`SELECT
  posts.id, posts.title, posts.post, posts.likes, categories.category
  FROM posts
  LEFT JOIN categories ON posts.category_id = categories.id
  ORDER BY posts.id DESC;`);
  response.json(result.rows);
})

// Get categories route
app.get('/categories', async (request, response) => {
  const result = await db.query(`SELECT * FROM categories;`);
  response.json(result.rows);
})

// Post post route
app.post('/posts', async (request, response) => {
  const { title, post, category_id } = request.body;
  const result = await db.query(
    `INSERT INTO posts (title, post, category_id)
    VALUES ($1, $2, $3)
    RETURNING *;`,
    [title, post, category_id]
  );
  response.json(result.rows);
})


// Post category route
app.post('/categories', async (request, response) => {
  const { category } = request.body;
  const result = await db.query(
    `INSERT INTO categories (category)
    VALUES ($1)
    RETURNING *;`,
    [category]
  );
  response.json(result.rows); 
})

// Delete post route
app.delete('/posts/:id', async (request, response) => {
  const { id } = request.params;
  const result = await db.query(
    `DELETE FROM posts
    WHERE id = $1
    RETURNING *;`,
    [id]
  );
  response.json(result.rows);
})

//Delete category route
app.delete('/categories/:id', async (request, response) => {
  const { id } = request.params;
  const result = await db.query(
    `DELETE FROM categories
    WHERE id = $1
    RETURNING *;`,
    [id]
  );
  response.json(result.rows);
})

// Put post route
app.put('/posts/:id', async (request, response) => {
  const postId = request.params.id; // Extract post ID from request.params
  try {
    // Increment likes count in the database
    await db.query(`
      UPDATE posts
      SET likes = likes + 1
      WHERE id = $1;
    `, [postId]);
    
    const result = await db.query(`
      SELECT id, title, post, likes
      FROM posts
      WHERE id = $1;
    `, [postId]);
    response.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating post:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});
