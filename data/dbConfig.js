const knex = require("knex");
const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);
// when we run npm test we are pointing this to a different database
