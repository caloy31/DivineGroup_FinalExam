const pool = require("../db");

const sql = `INSERT INTO divinegroup.service_provider (photo,fname,midname,lname,suffix,email,cellphone,telephone,address,job_desc,skills) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`;

const values = [
  "rendel.jpg",
  "Carla",
  "Ama",
  "Castra",
  "Jr.",
  "cas@gmail.com",
  "09456594404",
  "2234444",
  "Davao City",
  "Employee",
  "Coding",
];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
