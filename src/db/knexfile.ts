import { Knex } from 'knex';
require('dotenv').config();

const config: Knex.Config = {
  client: 'pg',
  connection: 'postgres://admin:admin@localhost:5001/project',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default config;
