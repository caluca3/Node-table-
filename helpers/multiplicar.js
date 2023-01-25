const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5,listar,h = 30)=>{
    try {
    let salida = '';
    let consola='';

    for (let i = 1; i <= h; i++) {
        salida  +=`${base} x ${i} = ${base*i}\n`;
        consola +=`${base} ${'x'.green} ${i} ${'='.red} ${base*i}\n`;
    }
    if (listar) {
        console.log("=====================".green)
        console.log(`Tabla del:`.yellow,colors.green(base))
        console.log("=====================".green)
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida,);
    
    return`Tabla del ${base} creada`;
        
    } catch (err) {
        console.log(colors.bgRed('Error de function'));
        throw err;   
    }
 
}
module.exports = {
    crearArchivoTabla,
}