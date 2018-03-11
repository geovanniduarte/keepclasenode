'use strict'

function creaAgente(nombre) {
    return {
        getNombre: function() {
            return nombre;
        },
        setNombre: function(valor) {
            nombre = valor;
        },
        saluda: function() {
            console.log('Hola soy', nombre);
        }
    }
}

const jones = creaAgente('Jones');

jones.saluda();