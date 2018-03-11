'use strict';

// cargamos el driver de mysql
const mysql = require('mysql');

// crear una conexio
const conexion = mysql.createConnection({
    host:'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// establecemos conexion
conexion.connect();

// lanzamos una consulta
conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
    if (err) {
        console.log('Hubo un error', err);
        return;
    }
    for (let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }

    //cerramos la conexion
    conexion.end();
});

