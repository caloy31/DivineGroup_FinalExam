const pool = require("../db");

const sql =
  "insert into divinegroup.client ( client_fname, client_midname, client_lname, email, address) values ($1,$2,$3,$4,$5) RETURNING *";

const value = ["Carlo", "Amarillo", "Castro", "cas@gmail.com", "Davao City"];

pool.query(sql, value, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

pool.end();
