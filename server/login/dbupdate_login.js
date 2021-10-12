const pool = require("../db");

pool.query(
  "UPDATE divinegroup.login SET " +
    "log_id = $1" +
    "name = $2 ," +
    "email = $3 " +
    "username = $4 " +
    "password = $5 " +
    " WHERE log_id = (val) RETURNING *",
  (err, res) => {
    const values = ["default", "default", "default", "default", "default"];

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
