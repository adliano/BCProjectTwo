/* eslint-disable semi, no-unreachable */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('pets_tb', table => {
    table.increments('id');
    table.string('petName');
    table.string('type');
    table.string('attitude').notNullable();
    table.boolean('isAdopted').defaultTo(false);
    table.integer('age').notNullable();
    table.string('imgPath');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('pets_tb');
};
/* eslint-enable semi, no-unreachable */
