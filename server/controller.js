module.exports = {
    getAllUsers (req, res) {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_users()
        .then(users => res.status(200).json(users))
        .catch(error => {
            res.status(500).send('Get Users Error!'); console.log('------------ getAllUsers error', error)
        })
    },

    getAllVehicles (req, res) {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_vehicles()
        .then(vehicles => res.status(200).json(vehicles))
        .catch(error => {
            res.status(500).send('Get Vehicles Error!'); console.log('------------ getAllVehicles error', error)
        })
    },

    newUser (req, res) {
        const dbInstance = req.app.get('db')

        const { name, email } = req.body

        dbInstance.new_user({
            name,
            email
        }).then(user => res.status(200).json(user))
        .catch(error => {
            res.status(500).send('New User Error!'); console.log('------------ newUser error', error)
        })
    },

    newVehicle (req, res) {
        const dbInstance = req.app.get('db')

        const { make, model, year, owner_id } = req.body

        dbInstance.new_vehicle({
            make,
            model,
            year,
            owner_id
        }).then(vehicle => res.status(200).json(vehicle))
        .catch(error => {
            res.status(500).send('New Vehicle Error!'); console.log('------------ newVehicle error', error)
        })
    },

    getVehicleCount (req, res) {
        const dbInstance = req.app.get('db')

        const { userId } = req.params

        dbInstance.get_vehicle_count([userId])
        .then(vehicle => res.status(200).json(vehicle))
        .catch(error => {
            res.status(500).send( 'Vehicle Count Error!'); console.log('------------ getVehicleCount error', error)
        })
    },

    getAllUsersVehicles (req, res) {
        const dbInstance = req.app.get('db')

        if(req.query.userEmail) {
            const { userEmail } = req.query

            dbInstance.get_all_users_vehicles_email([userEmail])
            .then(vehicles => res.status(200).json(vehicles))
            .catch(error => {
                res.status(500).send( 'Get All Users Email Vehicle Error!'); console.log('------------ getAllUsersVehicles error', error)
            })
        }
        else if(req.query.userFirstStart) {
            const { userFirstStart } = req.query

            dbInstance.get_all_users_vehicles_firstname([userFirstStart])
            .then(vehicles => res.status(200).json(vehicles))
            .catch(error => {
                res.status(500).send( 'Get All Users FirstName Vehicle Error!'); console.log('------------ getAllUsersVehicles error', error)
            })
        }
        else {
            res.status(500).send('Incorrect request format! Acceptable parameters are "userEmail" or "userFirstStart".')
        }
    },

    getUsersVehicles (req, res) {
        const dbInstance = req.app.get('db')

        const { userId } = req.params

        dbInstance.get_all_users_vehicles_id([userId])
        .then(vehicles => res.status(200).json(vehicles))
        .catch(error => {
            res.status(500).send( 'Get All Users ID Vehicle Error!'); console.log('------------ getUsersVehicles error', error)
        })
    },

    getNewerVehicles (req, res) {
        const dbInstance = req.app.get('db')

        dbInstance.get_newer_vehicles()
        .then(vehicles => res.status(200).json(vehicles))
        .catch(error => {
            res.status(500).send( 'Get Newer Vehicles Error!'); console.log('------------ getNewerVehicles error', error)
        })
    },

    editVehicle (req, res) {
        const dbInstance = req.app.get('db')

        const { vehicleId, userId } = req.params

        dbInstance.edit_vehicle({ vehicleId, userId })
        .then(vehicle => res.status(200).json(vehicle))
        .catch(error => {
            res.status(500).send( 'Edit Vehicle Error!'); console.log('------------ editVehicle error', error)
        })
    },

    removeOwnership (req, res) {
        const dbInstance = req.app.get('db')

        const { vehicleId, userId } = req.params

        dbInstance.remove_ownership({ vehicleId, userId })
        .then(vehicle => res.status(200).json(vehicle))
        .catch(error => {
            res.status(500).send( 'Remove Ownership Error!'); console.log('------------ removeOwnership error', error)
        })
    },

    deleteVehicle (req, res) {
        const dbInstance = req.app.get('db')

        const { vehicleId } = req.params

        dbInstance.delete_vehicle([vehicleId])
        .then(vehicle => res.status(200).json(vehicle))
        .catch(error => {
            res.status(500).send( 'Delete Vehicle Error!'); console.log('------------ deleteVehicle error', error)
        })
    }
}