exports.up = function (knex, Promise) {
  // Make sur you specify the testdb scheme and
  // that you only create the table if it doesn't exist
  knex.schema.withSchema('test_pet_db').hasTable('pets_tb')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('pets_tb', table => {
          table.increments('id')
          table.string('petName')
          table.string('type')
          table.string('attitude').notNullable()
          table.boolean('isAdopted').defaultTo(false)
          table.integer('age').notNullable()
          table.string('imgPath')
        })
      }
    })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('pets_tb')
}
