const pool = require("./db");

const sql = `INSERT INTO divinegroup.commission (com_id,commission) VALUES ($1,$2) RETURNING *`;

const values = ["default", "default"];

pool.query(sql, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
pool.end();
