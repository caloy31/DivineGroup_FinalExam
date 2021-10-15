const pool = require("../db");

const sql =
  "UPDATE divinegroup.client SET" +
  " client_fname = $1" +
  " client_midname = $2 ," +
  " client_lname = $3 ," +
  "email = $4 " +
  "address = $5 " +
  "WHERE client_ID = (val) RETURNING *";
const value = ["Default"];

pool.query(sql, value, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

pool.end();
