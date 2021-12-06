const express = require('express')
const router = express.Router()

const Flight = require('../models/Flight')

router.get('/flights/:flightNumber', (req, res) => {
    const flightNumber = parseInt(req.params.flightNumber)
    return Flight.query().where({number: flightNumber})
        .then(async flight => {       
            res.json({...flight, delayed: await flight.isDelayed() })
        })
})


module.exports = {
    router: router
}
