# Build a database driven React app

## Overview

Putting together the React client code, Node.js server code and Postgres database to build a full stack React application.

## User Stories

- [x] As a user, I want to be able to create new posts and add them to the page
- [x] As a user, I want to be able to assign a category to each post
- [x] As a user, I want to be able to view all posts added on the page and the category they're in
- [x] As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category (Stretch Goal)
- [x] As a user, I want to be able to add new categories (Stretch Goal)

## Requirements

Make in the order:

- Database (Supabase)
- Server (Express)
- Client (React)

 ** Remember to create 2 folders in your project root. One named "server" and one named "client". **

- [x] Design a database schema with relationships between tables
- [x] Create a new application with a React client and an Express server
(again, remember the client and the server should be separate)
- [x] Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)
- [x] Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.
  - [x] Create multiple pages using react-router-dom
  - [x] Create a home page.
  - [x] Create a page to show all the posts and use fetch to call your server to get your data.
  - [x] Create a page where users can create new posts using a form.

## Stretch Goals

- [ ] Allow users to "Like" posts and increase the likes
- [x] Allow users to DELETE posts
- [x] Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName.

![posts database setup](https://github.com/gabaal/Full-Stack-Posts-App/assets/36296159/c79b8a06-04ed-4b32-8aab-e37c1135876d)

the supabase database url from the .env is:
DATABASE_URL = postgres://postgres.jqdkvirbfgdnqzmliltb:ThisIsMyStrongPassword1234@aws-0-eu-west-2.pooler.supabase.com:5432/postgres