// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************
//  database name petinder_db
/*
TODO:

Data to be save:
* Pet name varchar
* Pet type varchar
* picuter path varchar
* address of the shelter ??????
* answers as aray of numbers ??????
*/
//
//
//
//
// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
* Queries the Example database
*
* @class Example
*/

// FIXME: change class name

class Example {
// FIXME: cahnge table name
  constructor (table = 'example') {
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
  // TODO: imprement this to save the pet data to mysql
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
  * to get the pet matched with user
  * @method Adriano
  * @param {Object} values The values to insert in the form of {column: value}
  * @returns Promise
  */
  findWhere (values) {
    console.log(values) // THIS IS JUST TO VOID LINTER ERROR
  }

  /**
  * delete 1 or more records by criteria
  *
  * @param {Object} where The where clause in the form of {column: value}
  * @returns Promise
  * @memberof Example
  */
  // ????????
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
  /**
*
*@param {*} a
*@param {*} b
*@param {*} c
*/
  testFunc (a, b, c) {
    console.log(`${a}${b}${c}`)
  }
}

module.exports = new Example()
