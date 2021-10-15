const pool = require("../db");

pool.query(
  "UPDATE group.service_provider SET " +
    "photo = $1" +
    " fname = $2 ," +
    "midname = $3 " +
    "lname = $4 " +
    "suffix = $5 " +
    "email = $6 " +
    "cellphone# = $7 " +
    "telephone# = $8 " +
    "address = $9 " +
    "job_desc = $10 " +
    "skills = $11 " +
    " WHERE emp_id = (val) RETURNING *",
  (err, res) => {
    const values = [
      "default",
      "default",
      "default",
      "default",
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
