insert into sql_assessment_users (name, email)
values ( ${name}, ${email} )
returning *;