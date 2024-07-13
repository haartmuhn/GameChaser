-- Drop existing tables if they exist
DROP TABLE IF EXISTS titles CASCADE;             -- Drop the titles table if it exists, along with any dependent objects
DROP TABLE IF EXISTS platforms CASCADE;          -- Drop the platforms table if it exists, along with any dependent objects
DROP TABLE IF EXISTS genres CASCADE;             -- Drop the genres table if it exists, along with any dependent objects

-- Create the genres table
CREATE TABLE genres (
  id SERIAL PRIMARY KEY,         -- Unique identifier for each genre
  name VARCHAR(255) NOT NULL     -- Name of the genre (e.g., Action, RPG)
);

-- Create the platforms table
CREATE TABLE platforms (
  id SERIAL PRIMARY KEY,         -- Unique identifier for each platform
  name VARCHAR(255) NOT NULL     -- Name of the platform (e.g., PC, PlayStation)
);

-- Create the titles table
CREATE TABLE titles (
  id SERIAL PRIMARY KEY,                            -- Unique identifier for each title
  name VARCHAR(255) NOT NULL,                       -- Name of the game title
  genres_id INT REFERENCES genres(id),              -- Foreign key to the genres table
  platforms_id INTEGER REFERENCES platforms(id),    -- Foreign key reference to platforms table
  decade_created VARCHAR(10),                       -- Decade when the game was created (e.g., 2000s)
  rating INT CHECK (rating >= 0 AND rating <= 10)   -- Rating of the game from 0 to 10
);
