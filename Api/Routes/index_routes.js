const express = require('express');
const router = express.Router();  
const pacienteController = require('../Controllers/pacienteController.js');


module.exports = function(){

        //add new patiens with POST
        router.post('/pacientes',
        pacienteController.addCliente,
        )

        //get patiens of collection
        router.get('/pacientes',
        pacienteController.getPacientes,
        );

        //get a especific patien by id 
        router.get('/pacientes/:id',
        pacienteController.selectPaciente
        );

        //update a register by id 
        router.put('/pacientes/:id',
        pacienteController.updatePaciente
        );

        ////delete register by id 
        router.delete('/pacientes/:id',
        pacienteController.deletePaciente
        )

    return router
}