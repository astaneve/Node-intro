const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql2/promise");
const PORT = 8080;

const app = express();

// const mysqlConfig = {
//   host: "mysql-asta-do-user-12295533-0.b.db.ondigitalocean.com",
//   user: "doadmin",
//   password: "AVNS_m9OYhdwXueF6XcdXVKs",
//   database: "defaultdb",
//   port: "25060",
// };

app.get('/shirts', async (req, res) => {
    try {
        const con = await mysql.createConnection(mysqlConfig);

    const response = await con.execute(
        "SELECT * FROM defaultdb.shirts ORDER BY price ASC LIMIT 3;"
    );

res.send(response[0]);
await con.end();
} catch (e) {
    console.log(e);
}
});

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    console.log("Success: " + con);
    res.send("Success");
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/shirts', async (req, res) => {
    try {
        const con = await mysql.createConnection(mysqlConfig);

    const response = await con.execute(
        'INSERT INTO shirts VALUES (brand, model, size, price) values (${shirt.brand}, ${shirt.model}, ${shirt.size}, ${shirt.price});'
    );

res.send(response[0]);
await con.end();
} catch (e) {
    console.log(e);
}
});