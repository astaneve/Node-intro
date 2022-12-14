const express = require("express");
const cors = require("cors");
 const app = express();
 const PORT = 8080;

 app.use(cors());
 app.use(express.json());
 app.use(cors()); // apsauga
 app.use(express.json()); // "{"name": "Rokas"}" => {name: "Rokas"}

 // "/" - base path (pagrindinis) pvz.: localhost:3000/
 // "/" - base path (pagrindinis) kelias pvz.: localhost:3000/
 // req - sutrumpinimas request žodžio. Kvietimas iš vartotojo pusės.
 // res - sutrumpinimas response žodžio. Grąžinimas iš serverinės dalies.

 const cars = ["Audi"];

 app.get("/", (req, res) => {
   res.send(["BMW", "Audi", "VW"]);
   res.send(cars);
 });

 app.post("/", (req, res) => {
   console.log(req.body);
   res.send("OK");
   cars.push(req.body.car);
   res.send(req.body);
 });

 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
