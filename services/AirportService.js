const Weather = require('../models/Weather')

class AirportService {

    async static isAirportOpen (airport) {
        // Check Weather Conditions
        const { condition } = await Weather.query().where({city: airport.city})
        if (!['sunlight','cloud','rain'].includes(condition)) return false
           
        // Check if airport is closed for whatever other reason
        if (!airport.open) return false

        return true
    }
    
}

module.exports = AirportService