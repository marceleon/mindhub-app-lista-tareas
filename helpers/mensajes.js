let readline= require('readline');
let colors = require('colors');
let {Menu}=require('./menu');

let mostrarMenu = () => {

    let m=new Menu('APP LISTA DE TAREAS');
    m.nuevaOpcion(1,'Crear Tarea');
    m.nuevaOpcion(2,'Listar Tareas');
    m.nuevaOpcion(3,'Listar Tareas Completadas');
    m.nuevaOpcion(4,'Listar Tareas Pendientes');
    m.nuevaOpcion(5,'Completar Tarea(s');
    m.nuevaOpcion(6,'Borrar Tarea');
    m.nuevaOpcion(0,'Salir');

    m.mostrar();
}

let pedir = (txt) => {

    return new Promise( (res, rej) => {
        let rl = readline.createInterface( process.stdin, process.stdout);
        rl.question(txt, ing => {
            res(ing);
            rl.close();
        });
    });
}

let pausa = () => {
    return pedir('Preseione '+' ENTER '.bgGreen+' para continuar');
}

module.exports = {mostrarMenu, pedir, pausa};
