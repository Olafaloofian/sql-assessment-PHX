-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS sql_assessment_vehicles;

-- === CREATE TABLE ==================

-- Complete the create table statement below. The table should have the following columns:

-- id         should be an auto-incrementing number, primary key
-- make       should be a string
-- model      should be a string
-- year       should be a number
-- owner_id   should be a number, foreign key

CREATE TABLE IF NOT EXISTS sql_assessment_vehicles (
  id serial primary key,--(add datatype and/or table contraint),
  make text,--(add datatype and/or table contraint),
  model text,--(add datatype and/or table contraint),
  year int,--(add datatype and/or table contraint),
  owner_id int references sql_assessment_users(id)--(add datatype and/or table contraint)
);

-- === INSERT STATEMENT ===============

-- Complete the insert statement below. The values below need to be inserted into the 'sql_assessment_vehicles' table.

insert into sql_assessment_vehicles (make, model, year, owner_id)
values
('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3);
