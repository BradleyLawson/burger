
DROP DATABASE IF EXISTS burgers_db;
-- Creating the burgers_db.
CREATE DATABASE burgers_db;
-- Using the burgers_db.
USE burgers_db;

-- Create a burgers table with these fields:
CREATE TABLE burgers(
    -- id: an auto incrementing int that serves as the primary key.    
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    -- burger_name: a string.   
    burger_name VARCHAR(100) NOT NULL,
    -- devoured: a boolean.    
    devoured BOOLEAN,
    PRIMARY KEY(id)
);