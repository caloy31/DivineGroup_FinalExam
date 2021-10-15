const pool = require("../db");

const sql =
  "UPDATE divinegroup.client SET email = $1 WHERE client_id = Defuault  RETURNING *";
const value = ["Default"];

pool.query(sql, value, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

pool.end();
