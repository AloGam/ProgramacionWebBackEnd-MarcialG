import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const recetaJSON = `
[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Puerco",
    "precio": 20,
    "ingredientes": {
      "proteina": {
         "nombre": "Puerco",
         "preparacion": "horneado"
      },
      "salsa": {
         "nombre": "Salsa Verde",
         "Elementos": "tomate verde, cebolla, chile y cilantro"
      },
      "acompañamientos": [
        {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
         "Elementos": ["cebolla", "cilantro", "naranja", "sal"]
        },
        {
        "nombre": "Guacamole",
        "cantidad": "2 cucharada",
        "Elementos": ["aguacate", "cebolla", "cilantro", "limon", "sal"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de Pollo",
    "precio": 15,
    "ingredientes": {
      "proteina": {
         "nombre": "Pollo",
         "preparacion": "horneado"
      },
      "salsa": {
         "nombre": "Salsa Roja",
         "Elementos": "tomate, cebolla, chile y cilantro"
      },
      "acompañamientos": [
        {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
         "Elementos": ["cebolla", "cilantro", "naranja", "sal"]
        },
        {
        "nombre": "Guacamole",
        "cantidad": "2 cucharada",
        "Elementos": ["aguacate", "cebolla", "cilantro", "limon", "sal"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Res",
    "precio": 25,
    "ingredientes": {
      "proteina": {
         "nombre": "Res",
         "preparacion": "horneado"
      },
      "salsa": {
         "nombre": "Salsa Roja",
         "Elementos": "tomate, cebolla, chile y cilantro"
      },
      "acompañamientos": [
        {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
         "Elementos": ["cebolla", "cilantro", "naranja", "sal"]
        },
        {
        "nombre": "Guacamole",
        "cantidad": "2 cucharada",
        "Elementos": ["aguacate", "cebolla", "cilantro", "limon", "sal"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de Camaron",
    "precio": 30,
    "ingredientes": {
      "proteina": {
         "nombre": "Camaron",
         "preparacion": "horneado"
      },
      "salsa": {
         "nombre": "Salsa de Chipotle",
         "Elementos": "tomate, cebolla, chile y cilantro"
      },
      "acompañamientos": [
        {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
         "Elementos": ["cebolla", "cilantro", "naranja", "sal"]
        },
        {
        "nombre": "Guacamole",
        "cantidad": "2 cucharada",
        "Elementos": ["aguacate", "cebolla", "cilantro", "limon", "sal"]
        }
      ]
    }
  }
]`;

const recetasTacos = JSON.parse(recetaJSON);

app.get('/receta/:type', (req, res) => {
  const elegirTaco = recetasTacos.find(
    r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
  );
  if (elegirTaco) {
    res.json({
      nombre: elegirTaco.nombre,
      proteina: elegirTaco.ingredientes.proteina.nombre,
      preparacion: elegirTaco.ingredientes.proteina.preparacion,
      salsa: elegirTaco.ingredientes.salsa.nombre,
      acompañamientos: elegirTaco.ingredientes.acompañamientos,
      precio: elegirTaco.precio
    });
  } else {
    res.json({ error: "Receta no encontrada" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

//cambios de package.json