const express = require('express');
//import { Express } from "express";
//The major difference between require and import, is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't. 
const mongoose = require('mongoose');
const routes = require('./Routes/index_routes.js')
const BodyParser = require('body-parser')
const cors = require('cors')

//create server
const server = express();

//enable whitelist to connect to db by domain
const whiteList = ['http://localhost:4000'];
const corsBlock = {
    origin: (origin, callback) =>{
        const exist = whiteList.some(dominio => dominio === origin);
        exist ? callback(null,true) : callback(new Error('No permito cargar por CORS'))
    }
}

//habilitar cors o corsBlock
//server.use(corsBlock())
server.use(cors())

//conect db 
mongoose.Promise= global.Promise;

mongoose.connect('mongodb+srv://root:MBAhh2UU2zTzLWDO@cluster0.pbgbp.mongodb.net/veterinaria?retryWrites=true&w=majority');

//habilitar boyd-parser 
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended:true}));

//habilitar routing
server.use('/',routes())

//port & turn on server 
server.listen(4000,()=>{
    console.log('Server funcionando');
}) 