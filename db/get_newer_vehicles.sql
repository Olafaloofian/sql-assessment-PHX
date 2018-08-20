select u.name, v.make, v.model, v.year, v.owner_id from sql_assessment_users u
join sql_assessment_vehicles v on u.id = v.owner_id
where year > 2000
order by year desc;
