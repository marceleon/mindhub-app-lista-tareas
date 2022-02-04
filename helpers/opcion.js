/*Opción del menú*/

const { Console } = require("console");

class Opcion {

    constructor(op, desc) {
        this.opcion=op;
        this.desc=desc;
        this.ejecutar= () => {console.log(this)};
    };

    mostrar() {
        return `${this.opcion}.${this.desc}`;
    }

};

Opcion.prototype.toString = function() {return `${this.opcion} ${this.desc}`};

module.exports = {Opcion};
