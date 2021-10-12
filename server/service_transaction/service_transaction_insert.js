const pool = require("../db");

const sql =
  "INSERT INTO divinegroup.service_transaction(transaction_id, client_ID, client_name, payment, emp_name, service_name, com_id, reviews) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
const data = [
  "default",
  "default",
  "default",
  "default",
  "default",
  "default",
  "default",
  "default",
];

pool.query(sql, data, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});
pool.end();
