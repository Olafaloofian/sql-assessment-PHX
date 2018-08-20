update sql_assessment_vehicles
set owner_id = null
where id = ${vehicleId}
returning *;