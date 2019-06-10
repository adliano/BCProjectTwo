// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection')

// []create and implement findWhere() method to get a simple record from database
// []create and implement update() to update a single record on database

/**
 * Queries the Example database
 *
 * @class Example
 */
class Example {
  constructor (table = 'pets_tb') {
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
  /**
   * update a specific todo
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @param {Object} values The values to update in the form of {column: value}
   * @returns Promise
   * @memberof Todo
   */
  update (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }

  /**
   * Finds 1 or more todos based on search criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @default {Object} [orderBy={}] Optional Direction to order `created_at` column
   * @returns Promise
   * @memberof Todo
   */
  find (where, orderBy = {}) {
    let mergedOrder = Object.assign({}, this.defaultOrder, orderBy)

    return knex(this.table)
      .where(where)
      .orderBy([mergedOrder]) // object must be wrapped in an array: https://knexjs.org/#Builder-orderBy
  }
}

module.exports = new Example()
