# Build a database driven React app

## Overview

Putting together the React client code, Node.js server code and Postgres database to build a full stack React application.

## User Stories

- [ ] As a user, I want to be able to create new posts and add them to the page
- [ ] As a user, I want to be able to assign a category to each post
- [ ] As a user, I want to be able to view all posts added on the page and the category they're in
- [ ] As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category (Stretch Goal)
- [ ] As a user, I want to be able to add new categories (Stretch Goal)

## Requirements

Make in the order:

- Database (Supabase)
- Server (Express)
- Client (React)

 ** Remember to create 2 folders in your project root. One named "server" and one named "client". **

- [ ] Design a database schema with relationships between tables
- [ ] Create a new application with a React client and an Express server
(again, remember the client and the server should be separate)
- [ ] Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)
- [ ] Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.
  - [ ] Create multiple pages using react-router-dom
  - [ ] Create a home page.
  - [ ] Create a page to show all the posts and use fetch to call your server to get your data.
- [ ] Create a page where users can create new posts using a form.

## Stretch Goals

- [ ] Allow users to "Like" posts and increase the likes
- [ ] Allow users to DELETE posts
- [ ] Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName.