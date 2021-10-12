const pool = require("./db");

const sql = `INSERT INTO divinegroup.login (log_id,name,email,username, password) VALUES ($1,$2,$3,$4,$5) RETURNING *`;

const values = ["default", "default", "default", "default", "default"];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
