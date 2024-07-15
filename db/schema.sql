-- Drop existing tables if they exist
DROP TABLE IF EXISTS titles CASCADE;
DROP TABLE IF EXISTS platforms CASCADE;
DROP TABLE IF EXISTS genres CASCADE;
DROP VIEW IF EXISTS game_titles;

-- Create the genres table
CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create the platforms table
CREATE TABLE platforms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create the titles table
CREATE TABLE titles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  genres_id INTEGER REFERENCES genres(id),
  platforms_id INTEGER REFERENCES platforms(id),
  decade_created VARCHAR(10),
  rating DECIMAL(3, 1) CHECK (rating >= 0 AND rating <= 10)
);

-- Create the view
CREATE VIEW game_titles AS
SELECT 
    t.name AS game_name,
    g.name AS genre,
    t.decade_created,
    STRING_AGG(p.name, ', ') AS platforms,
    t.rating
FROM 
    titles t
JOIN 
    genres g ON t.genres_id = g.id
JOIN 
    platforms p ON t.platforms_id = p.id
GROUP BY 
    t.name, g.name, t.decade_created, t.rating
ORDER BY 
    t.name;
