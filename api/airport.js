const express = require('express')
const router = express.Router()

const Airport = require('../models/Airport')
const AirportService = require('../services/AirportService')

router.get('/airports', (req, res) => {
    Airport.query()
        .then(airports => {
            res.json(airports)
        })
})

router.get('/airport/:id', (req, res) => {
    let id = parseInt(req.params.id)
    Airport.query().where({ id }).then(async airport => {
        airport.status = await AirportService.isAirportOpen(airport)
        res.json(airport)
    })
})

router.get('/airport/:id/departures', (req, res) => {
    const id = parseInt(req.params.id)

    Airport.relatedQuery('departureFlights').where({ id }).then(async flights => {
        
        const result = await Promise.all(
            flights.map(async flight => ({...flight, delayed: await flight.isDelayed() }))
            )

        res.json(result)
    })
})

router.get('/airport/:id/arrivals', (req, res) => {
    const id = parseInt(req.params.id)
    Airport.relatedQuery('arrivalFlights').where({ id }).then(async flights => {
        const result = await Promise.all(
            flights.map(async flight => ({...flight, delayed: await flight.isDelayed() }))
            )

        res.json(result)
    })
})

module.exports = {
    router: router
}
