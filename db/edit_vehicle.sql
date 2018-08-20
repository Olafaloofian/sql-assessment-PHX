update sql_assessment_vehicles
set owner_id = ${userId}
where id = ${vehicleId}
returning *;