
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flights', t => {
      t.uuid('id')
      t.name('number')
      t.uuid('arrival_id').references('id').inTable('airports')
      t.uuid('departure_id').references('id').inTable('airports')
      t.timestamp('departure_time')
      t.timestamp('arrival_time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flights')
};
