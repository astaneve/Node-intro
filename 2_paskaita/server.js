const http = require("http");



const port = 3001;

const users = [
{ name: "Asta", password: "Asta123" },
{ name: "Tomas", password: "Tomas123" },
];

const movies = [
    { name: "Nemo", hours: 2 },
    { name: "Avatar", hours: 3 },
];

const server = http.createServer((req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        };

        res.writeHead(200, headers);

        switch (req.url) {
            case "/users":
            res.write(JSON.stringify(users));
            res.end();
            break;
            default:
            res.write(JSON.stringify([]));
            res.end();
            }
            });

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});