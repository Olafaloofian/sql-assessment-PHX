select * from sql_assessment_vehicles
where owner_id = (select id from sql_assessment_users where name similar to $1 || '%');
