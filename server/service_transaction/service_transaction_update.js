const pool = require("../db");

pool.query(
  "UPDATE divinegroup.service_transaction SET " +
    "client_ID = $1" +
    "client_name = $2 ," +
    "payment = $3 " +
    "emp_name = $4 " +
    "service_name = $5 " +
    "com_id = $6 " +
    "reviews = $7 " +
    " WHERE transaction_id = (val) RETURNING *",
  (err, res) => {
    const values = [
      "default",
      "default",
      "default",
      "default",
      "default",
      "default",
      "default",
    ];

    pool.query(sql, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows);
      }
    });
  }
);
pool.end();
