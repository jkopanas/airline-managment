const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Weather extends Model {
  static get tableName() {
    return 'weather';
  }

  static get schema() {
    return {
      type: 'object',
      required: ['id'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        condition: {
          default: 'sunlight',
          enum: [
            'sunlight',
            'cloud',
            'rain',
            'thunderstorm',
            'snowing',
          ],
          type: string,
        },
        city: {
          type: ['string', null],
        },
      }
    }
  }
}

module.exports = Weather;