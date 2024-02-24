// Set up dotenv
import dotenv from 'dotenv';
dotenv.config();

// Set up Postgres
import pg from 'pg';
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Can only run one query at a time thus the queries are commented out, could i use a async / await function for each query in turn??

// Create table for categories

db.query(`CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(30) NOT NULL
)`)

// Create table for posts

// db.query(`CREATE TABLE IF NOT EXISTS posts (
//   id SERIAL PRIMARY KEY,
//   title VARCHAR(255) NOT NULL,
//   post TEXT,
//   likes INT DEFAULT 0,
//   category_id INT,
//   FOREIGN KEY (category_id) REFERENCES categories(id)
// )`)

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

// db.query(`INSERT INTO posts (title,post, category_id)
//   VALUES
//     ('Technology 101', 'Odio morbi quis commodo odio. Lacus vel facilisis volutpat est velit egestas dui id ornare. Fermentum et sollicitudin ac orci phasellus. Proin sed libero enim sed faucibus turpis in eu mi. Mi ipsum faucibus vitae aliquet nec. Risus nullam eget felis eget nunc lobortis mattis aliquam.', 1),
//     ('Politics in a nutshell', 'Risus nullam eget felis eget nunc lobortis mattis aliquam. Diam quis enim lobortis scelerisque fermentum dui faucibus. Porttitor massa id neque aliquam. ', 2),
//     ('Sport can actually be fun', ' Laoreet id donec ultrices tincidunt. At augue eget arcu dictum varius duis at. Diam vulputate ut pharetra sit amet aliquam. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Etiam sit amet nisl purus.', 3),
//     ('Food for thought', 'Tempus quam pellentesque nec nam. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Porttitor lacus luctus accumsan tortor posuere. Turpis in eu mi bibendum neque egestas congue quisque. Habitasse platea dictumst quisque sagittis purus. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Aliquam id diam maecenas ultricies. Diam quam nulla porttitor massa id neque.', 4),
//     ('Travel to the moon', ' Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. ', 5),
//     ('Another post about technology', 'Eu sem integer vitae justo eget magna fermentum. Posuere morbi leo urna molestie at. Nunc pulvinar sapien et ligula ullamcorper. Aliquet risus feugiat in ante. Neque laoreet suspendisse interdum consectetur libero id.', 1),
//     ('More Politics!', 'Sapien eget mi proin sed libero. Amet nisl suscipit adipiscing bibendum est. Pellentesque habitant morbi tristique senectus et netus et. Nibh venenatis cras sed felis eget velit aliquet.', 2),
//     ('Sport is my life..', 'Faucibus a pellentesque sit amet. Luctus venenatis lectus magna fringilla. Lacus laoreet non curabitur gravida arcu ac tortor.', 3),
//     ('Food, food and more food', 'Nulla facilisi cras fermentum odio eu feugiat. Nunc vel risus commodo viverra maecenas accumsan lacus vel.', 4),
//     ('Travel the world for free', ' Tristique senectus et netus et malesuada fames. Non odio euismod lacinia at. Eget lorem dolor sed viverra ipsum nunc. Ut eu sem integer vitae justo eget magna fermentum iaculis.', 5)
//   ;
// `)
