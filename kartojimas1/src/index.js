// 1. Susikurti package.json ir uzsipildyti ji ("title": "title", "scripts": {"start": 'nodemon index.js})
// 1.1 Susikurti atitinkama failu strukktura: src folderis, kuriame bus src/routes folderis, src/config.js failas
//src folderyje visi failai susije su visais musu failais.
// 2. susikurti index.js src folderyje
// 3. Suinstaliuoti packagus (node modulius) npm express dotenv mysql2 cors
// 4. Instaliuoti nodemon kaip dev moduli. npm install nodemon --save-dev
// express  leidzia paprasciau parasyti API (app: get/post);
// cors realiai nematomas, bet jis reikalingas paissaugoti nuo nereikalimgu requestu i musu serveri;
// Arba galima nusikopijuoti package.json ir suinstaliuoti npm install
// 5. Importuoti rikiamus modulius require ("module")
const express = require("express");
const cors = require("cors");
// 6. Susikonfiguruoti index.js faila ir pasirleisti serveri
const app = express(); // Express inicinizavimas
app.use(express.json()); // Kaip darome POST, pareitu JSON formatu
app.use(cors()); // Apsauga, kad ne visi asmenys galetu pasiekti mus API
// 7. Paleidziamas serveris
// 8. Iseksportuoja porta is config failo
const {port} = require("./config"); // ./ - tame paciame folderyje; ../ 1 folderiu atgal; ../../ - 2 folderiais atgal

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  // 9. Susikonfiguruoti src/config.js faila ir .env faila (su asmeniniais duomenimi, passwordais ir tt), 
  // 10. Susitikrinti duomenu bazes pavadinima .env faile

  app.get("/", async (req, res) => {
    try {
      const con = await mysql.createConnection(mysqlConfig); // prisijungiam
  
      const [response] = await con.execute("SELECT * FROM shirts;"); // padarom query
  
      res.send(response); // grazinama atsakyma
      await con.end(); // uzdarom prisijungima
    } catch (e) {
      console.log(e);
    }
  });