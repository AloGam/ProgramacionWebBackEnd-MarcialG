import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola');
    })

app.get('/about', (req, res) => {
    res.send('hola');
    })

app.listen(port, () => {
    console.log(`Server ejecutandose en puerto ${port}`);
    })