const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const {port} = require("./config");

app.get("/phones", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig);
  
      const [response] = await con.execute(
        `INSERT INTO goods.phones (title, descript, price, discountPercentage, rating, stock, brand, category, thumbnail, images) 
        values ('${req.body.title}', '${req.body.descript}', '${req.body.price}', '${req.body.discountPercentage}', '${req.body.rating}', '${req.body.stock}', '${req.body.brand}', '${req.body.category}'), '${req.body.thumbnail}', '${req.body.images}'`);
  
      res.send(response);
      await con.end();
    } catch (e) {
      console.log(e);
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });