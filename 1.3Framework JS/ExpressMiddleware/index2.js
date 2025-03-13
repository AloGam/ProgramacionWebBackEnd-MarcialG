import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

var nombreEquipo = "";
const port = 3000;
const aplicacion = express();

aplicacion.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next) {
    console.log(req.body);
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
    next();
}
aplicacion.use(registrador);

aplicacion.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

aplicacion.post("/submit", (req, res) => {
    res.send(`<h1>El nombre de tu equipo es:</h1>,<h2> ${nombreEquipo} </h2>`);
});

aplicacion.listen(port, () => {
console.log(`Servidor ejecutándose en http://localhost:>${port}`);
});
