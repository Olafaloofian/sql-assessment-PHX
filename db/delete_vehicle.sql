delete from sql_assessment_vehicles
where id = $1
returning *;