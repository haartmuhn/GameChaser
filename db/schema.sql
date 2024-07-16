-- Drop the view and tables if they exist
DROP VIEW IF EXISTS game_titles CASCADE;
DROP TABLE IF EXISTS titles_platforms CASCADE;
DROP TABLE IF EXISTS titles CASCADE;
DROP TABLE IF EXISTS platforms CASCADE;
DROP TABLE IF EXISTS genres CASCADE;

-- Create the genres table
CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(50) NOT NULL
);

-- Create the platforms table
CREATE TABLE platforms (
    platform_id SERIAL PRIMARY KEY,
    platform_name VARCHAR(50) NOT NULL
);

-- Create the titles table
CREATE TABLE titles (
    title_id SERIAL PRIMARY KEY,
    title_name VARCHAR(100) NOT NULL,
    genre_id INTEGER REFERENCES genres(genre_id),
    decade_created VARCHAR(50),
    rating DECIMAL(3, 1)
);

-- Create the titles_platforms join table
CREATE TABLE titles_platforms (
    title_id INTEGER REFERENCES titles(title_id),
    platform_id INTEGER REFERENCES platforms(platform_id),
    PRIMARY KEY (title_id, platform_id)
);

-- Create the game_titles view
CREATE VIEW game_titles AS
SELECT 
    t.title_id,
    t.title_name,
    g.genre_name,
    t.decade_created,
    t.rating,
    p.platform_name
FROM
    titles t
JOIN 
    genres g ON t.genre_id = g.genre_id
JOIN 
    titles_platforms tp ON t.title_id = tp.title_id
JOIN 
    platforms p ON tp.platform_id = p.platform_id;