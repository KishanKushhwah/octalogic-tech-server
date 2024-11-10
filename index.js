const express = require('express');
const cors = require('cors')


// const vehicle_types = require('./models/vehicle_types');
const {types,booking,vehicle_types,vehicles} = require('./models');
// const types = require('./models/type');


// const vehicles = require('./models/vehicles');
// const booking = require('./models/booking');

const app = express();
app.use(express.json());
app.use(cors())

//get-vehicle-types
app.get('/get-types', async (req, res) => {
    try {
        let typeData = await types.findAll();

        let respose = {
            status: 1,
            message: "success",
            data: typeData
        }

        res.status(200).json(respose);
    } catch (error) {
        let respose = {
            status: 0,
            message: error.message,
            data: []
        }
        res.status(500).json(respose);
    }
});

//get-vehicle-type
app.get('/get-vehicle-type/:vehicle_type_id', async (req, res) => {
    try {
        const vehicle_data = await vehicle_types.findAll({
            where: {
                type_id: req.params.vehicle_type_id,
            },
          });
        let response = {
            status: 1,
            message: "success",
            data: vehicle_data??[]
        }

        res.status(200).json(response);
    } catch (error) {
        let response = {
            status: 0,
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
});

//get-vehicle
app.get('/get-vehicle/:vehicle_type_id', async (req, res) => {
    try {
        const vehicle_data = await vehicles.findAll({
            where: {
                vehicle_id: req.params.vehicle_type_id,
            },
          });
        let response = {
            status: 1,
            message: "success",
            data: vehicle_data??[]
        }

        res.status(200).json(response);
    } catch (error) {
        let response = {
            status: 0,
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
});

//add-booking
app.post('/add-booking', async (req, res) => {
    try {
        const bookingSave = await booking.create(req.body);
        let response = {
            status: 1,
            message: "success",
            data: bookingSave??[]
        }
        res.status(200).json(response);
    } catch (error) {
        let response = {
            status: 0,
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
});

//booking list
app.get('/booking-list', async (req, res) => {
    try {
        const booking_data = await booking.findAll();
        let response = {
            status: 1,
            message: "success",
            data: booking_data ?? []
        }

        res.status(200).json(response);
    } catch (error) {
        let response = {
            status: 0,
            message: error.message,
            data: []
        }
        res.status(500).json(response);
    }
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
