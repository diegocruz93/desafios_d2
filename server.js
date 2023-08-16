const http = require("http");

http.createServer((req, res) => {
    const route = req.url;
    let usersList = [
        { nome: "Nome 1", email: "e1@app.com" },
        { nome: "Nome 2", email: "e2@app.com" },
        { nome: "Nome 3", email: "e3@app.com" }
    ]

    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });

    switch (route) {
        case "/" || "":
            res.write("<h1>Hello World</h1>");
            break;

        case "/health":
            res.write("<h1>API Online - V1.0</h1>");
            break;

        case "/users":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(usersList));
            break;
            
        case "/users/1":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(usersList[0]));
            break;
            
        default:
            res.writeHead(404, {"Content-Type": "text/html;charset=utf8"})    
            res.write("<h1>Página não encontrada</h1>");
            break;
    }

    res.end();

}).listen(3000, error => {
    error ? console.log(error) : console.log("Servidor rodando na porta 3000");
})