const fs = require('fs')
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('pub'));
app.use(express.static('css'))

app.listen(3005, () => {
    console.log("Escuchando en: http://localhost:3005")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});


