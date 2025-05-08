import axios from "axios";
const obtenerUsuario = async () => {
    try {
        const respuesta = await axios.get('https://reqres.in/api/users/4', {
            headers: {
                'Authorization': 'Basic ' + Buffer.from('eve.holt@reqres.in:kdshja').toString('base64')
            }
        });
        console.log('Datos del usuario: ', respuesta.data);
        } catch (error) {
        console.error('Error al obtener los datos del usuario: ', error.respuesta.data);
        }
    };

    obtenerUsuario();