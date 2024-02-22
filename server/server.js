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
  const result = await db.query(`SELECT * FROM posts;`);
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
    [Weather]
  );
  response.json(result.rows); 
})