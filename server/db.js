const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zoolbwibzqxcvu",
  password: "fc7de7a7a1bbf7de8f1132053670a5570f716cc9c307b4846f95b194fd38bd2d",
  host: "ec2-18-214-208-89.compute-1.amazonaws.com",
  port: 5432,
  database: "dapq4hp9s4gekp",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
