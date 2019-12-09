/*
 Create a database then run this file to build the correct tables in the database
*/

CREATE TABLE artists (
    id serial primary key,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    city VARCHAR(50),
    email VARCHAR(50),
    picture VARCHAR(80),
    blurb VARCHAR (2000)
);

CREATE TABLE artworks (
id serial primary key,
title VARCHAR(100),
medium VARCHAR(50),
artist INTEGER REFERENCES artists(id),
price float,
picture VARCHAR(80),
sold boolean DEFAULT 'f', 
award VARCHAR(100)
);
