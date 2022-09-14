const express = require("express"); //importas
const mysql = require("mysql2/promise");
const PORT = 8080;
const app = express();

const mysqlConfig = {
    host: "mysql-asta-do-user-12295533-0.b.db.ondigitalocean.com",
    user: "doadmin",
    password: "AVNS_m9OYhdwXueF6XcdXVKs",
    database: "defaultdb",
    port: "25060",
  };

  app.get("/", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
      console.log("Success: " + con);

      con.execute("CREATE TABLE Persons(PersonID int,LastName varchar(255),FirstName varchar(255),Adress varchar(255),City varchar(255),PRIMARY KEY(PersonID));") // siunciamas querry i duomenu baze

      res.send("Success");
      await con.end(); // uzdaromas conectionas
    } catch (e) {
      console.log(e);
    }
  });

  app.listen(8080, () => {
      console.log('Server is running on port ${8080}');
  });