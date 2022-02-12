const express = require('express');
//import { Express } from "express";
//The major difference between require and import, is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't. 
const mongoose = require('mongoose');
const routes = require('./Routes/index_routes.js')
const BodyParser = require('body-parser')

//create server
const server = express();

//conect db 
mongoose.Promise= global.Promise;
mongoose.connect('mongodb+srv://iAndy9:AQZAswxsDECD123!@cluster0.pbgbp.mongodb.net/veterinaria?retryWrites=true&w=majority');

//habilitar boyd-parser 
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended:true}));

//habilitar routing
server.use('/',routes())

//port & turn on server 
server.listen(4000,()=>{
    console.log('Server funcionando');
})
/* const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@azcluster.nb7gg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */