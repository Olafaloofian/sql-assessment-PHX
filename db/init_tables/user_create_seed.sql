-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS sql_assessment_users CASCADE;

-- === CREATE TABLE ==================

-- Complete the create table statement below. The table should have the following columns and datatypes/constraints:

-- id     should be an auto-incrementing number, primary key
-- name   should be a string
-- email  should be a string

CREATE TABLE IF NOT EXISTS sql_assessment_users (
  id serial primary key,--(add datatype and/or table contraint),
  name text,--(add datatype and/or table contraint),
  email text--(add datatype and/or table contraint)
);

-- === INSERT STATEMENT ===============

-- Complete the first part of the insert statement below. The values below need to be inserted into the 'sql_assessment_users' table.

insert into sql_assessment_users(name, email)
VALUES
('John Smith', 'john@smith.com'),
('Dave Davis', 'dave@davis.com'),
('Jane Janis', 'jane@janis.com');
