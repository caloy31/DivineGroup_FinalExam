const pool = require("../db");

pool.query(
  "DELETE FROM divinegroup.service_transaction WHERE transaction_id = $1 RETURNING *",
  [value],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
pool.end();
