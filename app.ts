import People from "./models/People";
import Express from 'express';
import * as mongoDB from "mongodb";
import express from "express";
import mongoose from 'mongoose';
const app: Express.Application  = express();
const dbName = 'people-dataBase';
let db: mongoDB.Db ; 
const url = 'mongodb://127.0.0.1:27017'
const connectionParams = {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: true} ;
mongoose.connect(url).then(()=>{
    console.log("Connected DB");
}).catch(()=>{
    console.log("DB failed");
});
const peopleRouter = require("./routes/people");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/people" , peopleRouter);
app.get("/",async (req:any,res:any)=>{
    try{
      
        return res.status(200).json({msg:"Welcome to my simple App"});
    }
    catch{
        return res.status(500).json({msg:"Something went wrong :("});
    }
  });





  app.listen(3000,()=>{
    console.log(`This server is running on port ${3000}`);
})