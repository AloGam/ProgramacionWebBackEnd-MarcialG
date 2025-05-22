import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';
import { validarUsuario } from './models/validarUsuario.js';

dotenv.config();

const app = express();
const puerto = 3000;
const uri = process.env.uri;

let usuariosCollection; // Se inicializa después de la conexión a MongoDB

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a MongoDB
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Conectado a MongoDB');
    const db = client.db(); // Base de datos desde URI
    usuariosCollection = db.collection('usuarios');

    app.listen(puerto, () => {
      console.log(`Servidor corriendo en http://localhost:${puerto}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB:', err);
  });

// Crear usuario
app.post('/usuarios', async (req, res) => {
  try {
    const errores = validarUsuario(req.body);
    if (errores.length > 0) {
      return res.status(400).json({ errores });
    }

    // Verifica correo único
    const existe = await usuariosCollection.findOne({ correo: req.body.correo });
    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const result = await usuariosCollection.insertOne(req.body);
    res.status(201).json({ _id: result.insertedId, ...req.body });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Actualizar usuario
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const errores = validarUsuario(req.body);
    if (errores.length > 0) {
      return res.status(400).json({ errores });
    }

    // Validar correo único (excepto para el propio usuario)
    const existe = await usuariosCollection.findOne({
      correo: req.body.correo,
      _id: { $ne: new ObjectId(id) }
    });

    if (existe) {
      return res.status(400).json({ error: 'El correo ya está registrado por otro usuario' });
    }

    const usuario = await usuariosCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );

    if (!usuario.value) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario.value);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuariosCollection.findOneAndDelete({ _id: new ObjectId(id) });
    if (!usuario.value) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuariosCollection.find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuariosCollection.findOne({ _id: new ObjectId(id) });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});