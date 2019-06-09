// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection')

// [x]Rename examples to pets.js
// [x]Test findAll(), if not working fix it
// [x]implement the create() method to create a new record at the MySQL database
// []create and implement findWhere() method to get a simple record from database
// []create and implement update() to update a single record on database

/**
 * Queries the Example database
 *
 * @class Example
 */
class Example {
  constructor (table = 'pets_DB') {
    this.table = table
  }

  /**
   *
   * Find all Examples in the table
   * @returns Promise
   * @memberof Example
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof Example
 */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Example
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
}

module.exports = new Example()
