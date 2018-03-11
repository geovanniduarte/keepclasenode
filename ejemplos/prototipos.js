'use strict'

function Persona(nombre) {
    this.nombre = nombre;
}

//Construir un objeto de tipo Persona.
const luis = new Persona('Luis');

//anadir propiedades y metidos a Persona.
Persona.prototype.saluda = function() {
    console.log('Hola me llamo',this.nombre);
}

luis.saluda();

//Herencia de persona ----------------------------

function Agente(name) {
    Persona.call(this,name); // heredamos constructor de personas.
}

// heredar las propiedades y metodos del prototipo.
Agente.prototype = new Persona('soy un prototipo');

const smith = new Agente('smith');

smith.saluda();

//Herencia multiple ------------------------------

//Mixing superheroe
function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    }

    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();

