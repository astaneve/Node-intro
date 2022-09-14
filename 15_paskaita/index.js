const express = require("express"); //importas
const mysql = require("mysql2/promise");
const PORT = 3000;

const app = express();
app.use(express.json());

const mysqlConfig = {
    host: "mysql-asta-do-user-12295533-0.b.db.ondigitalocean.com",
    user: "doadmin",
    password: "AVNS_m9OYhdwXueF6XcdXVKs",
    database: "products",
    port: "25060",
  };

  app.get("/", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      console.log("Success: " + con);
      res.send("Success");
      await con.end(); 
    } catch (e) {
      console.log(e);
    }
  });

  app.get("/items", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
const limit = req.query.limit;

// console.log(mysql.escape("Asta"));
// console.log("Asta");

      const response = await con.execute(`SELECT * FROM items LIMIT ${limit};`);
      res.send(response[0]);
      await con.end(); 
    } catch (e) {
      console.log(e);
    }
  });

  app.get("*", (req, res) => {
    res.status(404).send("Page not found")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });