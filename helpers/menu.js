/*Menú de Opciones*/
let colors = require('colors');
let {Opcion}=require('./opcion');

class Menu {

    constructor(t) {
        this.titulo=t;
        this.msg="Opciones disponibles";
        this.opciones = [];
    };

    nuevaOpcion(op, desc) {
        let o=new Opcion(op, desc);
        this.opciones.push(o);
    };

    mostrar(){
        let l= (this.titulo.length<this.msg.length?this.msg.length:this.titulo.lengh)+5;

        let ren="-".repeat(l);
        let m=0;


        console.log.clear

        console.log(ren);
        m= Math.trunc((l-this.titulo.length)/2);
        console.log(colors.yellow(" ".repeat(m)+this.titulo));
        m= Math.trunc((l-this.msg.length)/2);
        console.log(colors.yellow(" ".repeat(m)+this.msg));
        console.log(ren);

        this.opciones.forEach( o => console.log(o.mostrar()));

        console.log(ren);

    }
}

module.exports = {Menu};

