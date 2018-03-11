'use strict'

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        //resolve(plato + ' ajo');
        reject('no queda ajo');
    });
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}

// encadenar las funciones que devuelven promesas
const paella = 'paella con';

conArroz(paella)
.then(conAjo)
.then(conAjo)
.then(plato => {
    console.log('plato:', plato);
}).catch(err => {
    console.log('Hubo un fallo', err);
})