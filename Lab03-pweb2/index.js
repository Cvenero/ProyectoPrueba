const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end("Hola mundo");
});
server.listen(3000);
console.log("Escuchando en: http://localhost:3000")

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('pub'));

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../Lab01-pweb2/index.html'));
});
