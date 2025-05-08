
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((respuesta) => {

    if (!respuesta.ok) {
      throw new Error('Respuesta del servidor fallida ' + respuesta.statusText);
    }
    return response.json();
  })
  .then(datos => {
    console.log('Datos recibidos ', datos);
  })
  .catch(error => {
    console.error('Error al obtener los datos: ', error);
});
