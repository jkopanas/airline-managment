const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Airport extends Model {
  static get tableName() {
    return 'airports';
  }

  static get schema() {
    return {
      type: 'object',
      required: ['id','name', 'city'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        name: {
          type: ['string', null],
        },
        city: {
          type: ['string', null],
        },
        open: {
          type: 'boolean',
          default: false
        }
      }
    }
  }

  static get relationMappings() {
      const Flight = require('./Flight')
      return {
        arrivalFlights: {
          relation: Model.HasManyRelation,
          modelClass: Flight,
          join: {
            from: 'airports.id',
            to: 'flights.arrival_id'
          }
        },
        departureFlights: {
          relation: Model.HasManyRelation,
          modelClass: Flight,
          join: {
            from: 'airports.id',
            to: 'flights.departure_id'
          }
      }
    }
  }




}

module.exports = Airport;