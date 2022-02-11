const  Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const pacienteSchema = new Schema({
    nombre:{
        type:String,
        trim:true,
    },
    propietario:{
        type:String,
        trim:true
    },
    fecha:{
        type:string,
        trim:true,
    },
    hora:{
        type:string,
        trim:true,
    },
    sintomas:{
        type:string,
        trim:true,
    }
});

module.exports = Mongoose.model('Paciente', pacienteSchema);
