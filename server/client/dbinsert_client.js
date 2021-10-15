const pool = require("../db");

const sql =
  "insert into divinegroup.client (client_id, client_fname, client_midname, client_Iname, email, address) values (DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT) RETURNING *";

const value = [
  "Default",
  "Default",
  "Default",
  "Default",
  "Default",
  "Default",
];

pool.query(sql, value, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

pool.end();
