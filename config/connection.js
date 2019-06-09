// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies

/* eslint-disable  no-unused-vars, no-undef */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../models/knexfile')[ENV])
/* eslint-enable no-undef */

// Exports the connection for other files to use
module.exports = Knex
