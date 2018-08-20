insert into sql_assessment_vehicles (make, model, year, owner_id)
values (${make}, ${model}, ${year}, ${owner_id})
returning *;