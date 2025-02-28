import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.send('Hola');
    });

app.get('/about', (req, res) => {
    res.send('hola');
    });

app.get('/contact', (req, res) => {
    res.send('hola');
    });

app.listen(port, () => {
    console.log(`Server ejecutandose en puerto 3000`);
    });