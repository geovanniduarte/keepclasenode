'use strict'

// función que retorna una promesa.
function sleep(ms) {
    return new Promise((resolve, reject) => {
        //aqui va el codigo que hará resolverse o rechazarse la promesa
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// consumir la promesa
const promesa = sleep(1000);

console.log(promesa);

promesa.then(() => {
    console.log('la promesa se completo');
}).catch(err => {

})