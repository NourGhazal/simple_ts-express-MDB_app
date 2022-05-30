import People from "../models/People";
import Express from 'express';
import express from "express";
const router = express.Router();


  router.get("/",async (req:any,res:any)=>{
    try{
        const allPeople = await People.find();
        console.log("HERE")
        return res.status(200).json(allPeople);
    }
    catch{
        return res.status(500).json({msg:"Something went wrong :("});
    }
  });
  router.get("/:id",async (req:Express.Request,res:Express.Response)=>{
    try{
        console.log("HERE")
        const id = req.params.id;
        const person = await People.findOne({_id:id});
        return res.status(200).json(person);
    }
    catch{
        return res.status(500).json({msg:"Something went wrong :("});
    }
  });
router.post("/",async (req:Express.Request,res:Express.Response)=>{
    try{
        console.log("HERE")
        const {firstName, lastName} = req.body;
        const person = new People({firstName, lastName});
        console.log(person);
        const saved = await person.save();
        return res.status(201).json({msg:"saved successfully", id:saved._id});
    }
    catch (error){
        return res.status(500).json({ message: (error as Error).message });
    }
  })

module.exports = router;