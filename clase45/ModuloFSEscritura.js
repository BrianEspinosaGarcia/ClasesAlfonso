const fs=require('fs');

fs.writeFile('./archivo1.txt',
             'Creacion del Documento\nSegunda linea del Documen',
              error => {
                if (error)
                    console.log(error);
                else
                    console.log('El archivo fue creado');
});

console.log('última línea del programa');
