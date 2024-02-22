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