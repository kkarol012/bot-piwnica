const { Pool } = require('pg')

const pool = new Pool({
    connectionString : process.env.database_url,
  })

  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }