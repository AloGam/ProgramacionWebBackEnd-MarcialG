import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    message:"Escribe la direccion de tu pagina de GitHub",
    name: "URL",
    },
])
  .then((answers) => {
    console.log(answers);
    const enlace = answers.URL;
    var qr_png = qr.image(enlace);
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("enlace.txt", enlace, (err)=>{
        if(err)throw err;
        console.log("El archivo del enlace se ha creado");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
