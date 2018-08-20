const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
// Controller file for less clutter in server/index.js
const controller = require('./controller')
// For using .env file
require('dotenv').config()

const PORT = 3000

const app = express()

app.use(bodyParser.json())

// Connecting to Heroku database using connection string in .env file
massive( process.env.CONNECTION_STRING ).then( db => {
    app.set('db', db);

    // Initialize user table and vehicle table.
    db.init_tables.user_create_seed().then( response => {
        console.log('User table init');
        db.init_tables.vehicle_create_seed().then( response => {
        console.log('Vehicle table init');
        })
    })
}).catch(error => console.log('------------ MASSIVE ERROR', error))

// ========= GET ENDPOINTS ========== //
app.get('/api/users', controller.getAllUsers)
app.get('/api/vehicles', controller.getAllVehicles)
app.get('/api/user/:userId/vehiclecount', controller.getVehicleCount)
app.get('/api/vehicle', controller.getAllUsersVehicles)
app.get('/api/newervehiclesbyyear', controller.getNewerVehicles)
app.get('/api/user/:userId/vehicle', controller.getUsersVehicles)

// ========= PUT ENDPOINTS ========== //
app.put('/api/vehicle/:vehicleId/user/:userId', controller.editVehicle)

// ========= POST ENDPOINTS ========== //
app.post('/api/vehicles', controller.newVehicle)
app.post('/api/users', controller.newUser)

// ========= DELETE ENDPOINTS ========== //
app.delete('/api/user/:userId/vehicle/:vehicleId', controller.removeOwnership)
app.delete('/api/vehicle/:vehicleId', controller.deleteVehicle)

// Express server initialization
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}! Nice.`)
})
