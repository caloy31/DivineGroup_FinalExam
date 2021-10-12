const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zoolbwibzqxcvu",
  password: "fc7de7a7a1bbf7de8f1132053670a5570f716cc9c307b4846f95b194fd38bd2d",
  host: "localhost",
  port: 5432,
  database: "dapq4hp9s4gekp",
});

module.exports = pool;
