const pool = require("./db");

pool.query(
  "UPDATE divinegroup.commission SET " +
    "com_id = $1" +
    " commission = $2 ," +
    " WHERE emp_id = (val) RETURNING *",
  (err, res) => {
    const values = ["default", "default"];

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
