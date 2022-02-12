const { json } = require("express");
const model_paciente = require("../Models/model_paciente");
 

//cuadno se crea un nuevo cliente
exports.addCliente = async (req,res, next )=>{
    //creat obj with data of patiens
    const newPaciente = new model_paciente(req.body) 
    //to-do: insertar en la bas de datos
    try {
        await newPaciente.save()
        console.log(req.body);
        res.json({msg:'El cliente se agrego correctamente'});        
    } catch (error) {
        console.log(error);
        next();
    }
}
// get all registers of db in pactiens collections
exports.getPacientes= async (req,res,next)=>{
    
    try {        
        const listPacientes = await model_paciente.find({});
        res.json(listPacientes);
    } catch (error) {
        console.log(error);
        next()
    }
}

//get a especific patien by id
exports.selectPaciente = async (req,res,next) =>{
    try {
        const selectPaciente = await model_paciente.findById(req.params.id)
        res.json(selectPaciente);

    } catch (error) {
        console.log(error);
        next();
    }
}

//update a register by id 
exports.updatePaciente = async (req,res,next) =>{
    try {
        const updatePaciente = await model_paciente.findOneAndUpdate({_id: req.params.id},req.body,{
            new:true,
        })
        req.json(updatePaciente)
    } catch (error) {
        console.log(error);
        next();
    }
}

//delete a register by id
exports.deletePaciente = async (req,res,next)=>{
    try {
        await model_paciente.findByIdAndDelete({_id:req.params.id});
        res,json({msg: 'el paciente ha sido elimininado'})
    } catch (error) {
        console.log(error);
        next();
    }
}