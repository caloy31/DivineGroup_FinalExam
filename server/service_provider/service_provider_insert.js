const pool = require("../db");

const sql = `INSERT INTO divinegroup.service_provider (photo,fname,midname,lname,suffix,email,cellphone#,telephone#,address,job_desc,skills) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`;

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
  "default",
];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
