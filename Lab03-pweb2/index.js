const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end("Hola mundo");
});

const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});
