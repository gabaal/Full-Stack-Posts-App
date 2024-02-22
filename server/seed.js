// Set up dotenv
import dotenv from 'dotenv';
dotenv.config();

// Set up Postgres
import pg from 'pg';
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create table for categories
db.query(`CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL
)`)

// Create table for posts
db.query(`CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  post TEXT NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
)`)

// Insert categories data
// db.query(`INSERT INTO categories (category)
//   VALUES
//     ('Technology'),
//     ('Politics'),
//     ('Sport'),
//     ('Food'),
//     ('Travel')
//   ;
// `)

// Insert posts data
db.query(`INSERT INTO posts (title,post, category_id)
  VALUES
    ('Technology', 'Technology post', 1),
    ('Politics', 'Politics post', 2),
    ('Sport', 'Sport post', 3),
    ('Food', 'Food post', 4),
    ('Travel', 'Travel post', 5),
    ('Technology 2', 'Technology post 2', 1),
    ('Politics 2', 'Politics post 2', 2),
    ('Sport 2', 'Sport post 2', 3),
    ('Food 2', 'Food post 2', 4),
    ('Travel 2', 'Travel post 2', 5)
  ;
`)
