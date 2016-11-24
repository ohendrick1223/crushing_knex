'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

// const sql = knex(ghost_town).toString();

knex("ghost_town_db").then((result) => {
  console.log(result);
  knex.destroy();
})
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});
