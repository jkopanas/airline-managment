
exports.up = function(knex, Promise) {
  return knex.schema.createTable('airports', t => {
      t.uuid('id')
      t.name('content')
      t.city('content')
      t.boolean('open')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airportss')
};
