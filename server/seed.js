// Set up dotenv
import dotenv from 'dotenv';
dotenv.config();

// Set up Postgres
import pg from 'pg';
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create table for categories

// Create table for posts

// Insert categories data

// Insert posts data