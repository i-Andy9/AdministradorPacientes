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
        type:String,
        trim:true,
    },
    hora:{
        type:String,
        trim:true,
    },
    sintomas:{
        type:String,
        trim:true,
    }
});

module.exports = Mongoose.model('Paciente', pacienteSchema);
