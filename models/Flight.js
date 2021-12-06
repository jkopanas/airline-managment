const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Flight extends Model {
  static get tableName() {
    return 'flights';
  }

  static get schema() {
    return {
      type: 'object',
      required: ['id','number'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        number: {
          type: ['string', null],
        },
        arrivalId: {
          type: 'string',
          format: 'uuid',
        },
        departureId: {
          type: 'string',
          format: 'uuid',
        },
        departureTime: { 
          type: ['string', 'object'], 
          format: 'date-time' 
        },
        arrivalTime: { 
          type: ['string', 'object'], 
          format: 'date-time' 
        },
        delayedTime: { 
          type: ['string', 'object'], 
          format: 'date-time' 
        },
      }
    }
  }

  static get relationMappings() {
      const Airport = require('./Airport')
      return {
          arrivedAirport: {
            relation: Model.BelongsToOneRelation,
            modelClass: Airport,
            join: {
                from: 'flights.arrival_id',
                to: 'airports.id'
            }
          },
          departuredAirport: {
            relation: Model.BelongsToOneRelation,
            modelClass: Airport,
            join: {
                from: 'flights.departure_id',
                to: 'airports.id'
            }
          }
      }
  }

  async isDelayed () {
    const arrivalAirport = await this.$relatedQuery('arrivedAirport')

    const departureAirport =  await this.$relatedQuery('departuredAirport')

    if (
      AirportService.isAirportOpen(arrivalAirport) === false ||
      AirportService.isAirportOpen(departureAirport) === false 
    ) {
      return true
    }

    return false
  }

}

module.exports = Flight;