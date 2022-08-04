const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

const names = [{name: "Asta", surname: "Ilgaude" }];
// [{name: Asta}, {name: Ziggy}]
app.get("/names", (req, res) => {
    res.send(names);
});

app.post("/names", (req, res) => {
    names.push(req.body);
    res.send(req.body);
// {name: "Belekas"}
});

app.listen(PORT, () =>
console.log(`Server is running on http://localhost:${PORT}`)
);