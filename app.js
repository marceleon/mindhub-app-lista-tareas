
//Referncias
let {mostrarMenu, pedir, pausa} = require('./helpers/mensajes');

//Funciones
const main = async() => { 
    console.log("Hola Mudo")

    let op='';

    do {
        console.clear();
        mostrarMenu();
        op=await pedir('Seleccione una opcion ');
        console.log(`Opción seleccionada: ${op}`);    
        await pausa();
    } while (op!=='0');
    
};

//Principal
main();


