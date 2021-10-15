const pool = require("../db");

const sql = "DELETE FROM divinegroup.client WHERE client_id = $1 RETURNING *";
const value = [Default];

pool.query(sql, value, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

pool.end();
