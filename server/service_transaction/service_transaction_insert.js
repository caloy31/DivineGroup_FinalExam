const pool = require("../db");

const sql =
  "INSERT INTO divinegroup.service_transaction( client_name, payment, emp_name, service_name, com_id, reviews) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const data = ["Lance", "3000", "Carlo Castro", "Coding", "1", "Not Bad"];

pool.query(sql, data, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});
pool.end();
