const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "siddhant@123",
  host: "localhost",
  port: 5432,
  database: "taskmanager",
});

module.exports = pool;
