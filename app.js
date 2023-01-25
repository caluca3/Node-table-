const { crearArchivoTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv  = require('./yargs/yargs');

console.clear();

crearArchivoTabla(argv.b,argv.l,argv.h)
                        .then(nombreArchivo=>console.log(colors.bgMagenta( nombreArchivo)))
                        .catch(err => console.log(err)); 
