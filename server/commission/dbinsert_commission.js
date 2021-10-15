const pool = require("../db");

const sql = `INSERT INTO divinegroup.commission (commission) VALUES ($1) RETURNING *`;

const values = ["200"];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
