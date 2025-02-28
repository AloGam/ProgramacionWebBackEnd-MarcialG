import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send('respuesta GET');
});

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});

app.post("/registro", (req, res) => {
    res.send("<p>Guardado</p>");
    });

app.put("/actualizar", (req, res) => {
    res.send("<p>ok</p>");
    });

app.patch("/modificar", (req, res) => {
    res.send("<p>modificado</p>");
    });

app.delete("/eliminar", (req, res) => {
    res.send("<p>eliminado</p>");
    });