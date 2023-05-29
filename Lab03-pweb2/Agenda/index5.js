const fs = require('fs')
const path = require('path');
const express = require('express');
const { error } = require('console');
const app = express();
app.use(express.static('pub'));
app.use(express.static('css'))


app.listen(3005, () => {
    console.log("Escuchando en: http://localhost:3005")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});

app.post('/crear', (request, response) => {
    const title = request.body.title;
    const text = request.body.text;
    console.log(title,text);

    const archivo= title+'.txt';
    const rutaArchivo= path.join(__dirname, 'priv', archivo);
    fs.writeFileSync(rutaArchivo,text,(err)=>{
        if(err){
            console.log("Error escribiendo archivo",err)

        }else{
            console.log("Archivo creado");
            response.send("Datos guardados exitoso");
        }
    });

});

app.get("/data",(request, response)=>{
    console.log("entrando datos")
    fs.readdir("priv","utf-8",(err, data)=>{
        if(err){
            console.error(err)
            return
        }
        response.json({
            text : data
        })
    })
    console.log("salida")
}






)

