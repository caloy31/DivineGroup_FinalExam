const pool = require("../db");

const sql = `INSERT INTO divinegroup.login (name,email,username, password) VALUES ($1,$2,$3,$4) RETURNING *`;

const values = ["Carlo Castro", "cas@gmail.com", "castrocarlo", "1234"];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
