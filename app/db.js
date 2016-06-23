import config      from './config/knexfile.js';
let env         = 'development';
//import knex        from 'knex'(config[env]);
//System.import('knex').ap(config[env]);
var knex        = require('knex')(config[env]);
module.exports = knex;

knex.migrate.latest([config]);
