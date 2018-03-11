'use strict'

const express = require('express');
const router = express.Router();


// cargar el modelo del agente
const Agente = require('../../models/Agente');

/**
 * POST /agentes
 * crea un agente
 */
router.post('/', (req, res, next) => {
    // creamos un agente en memoria.
    const agente = new Agente(req.body);


    // lo persistimos en la coleccion de agentes.
    agente.save((err, agenteGuardado) => {
        if (err) {
            next(erro);
            return;
        }
        res.json({succes: true, result: agenteGuardado})
    })
});

module.exports = router;