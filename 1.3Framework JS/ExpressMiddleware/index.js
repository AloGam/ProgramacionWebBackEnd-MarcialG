import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const aplicacion = express();
const port = 3000;

aplicacion.use(bodyParser.urlencoded({ extended: true }));

aplicacion.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

aplicacion.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Datos recibidos");
});

aplicacion.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


