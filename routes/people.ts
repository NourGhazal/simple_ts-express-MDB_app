import People from "../models/People";
import Express from 'express';
import express from "express";
const router = express.Router();


  router.get("/",async (req:any,res:any)=>{
    try{
        //retrieving all people data from the database
        const allPeople = await People.find();
        return res.status(200).json(allPeople);
    }
    catch (error){
        return res.status(500).json({ message: (error as Error).message });
    }
  });
  router.get("/:id",async (req:Express.Request,res:Express.Response)=>{
    try{
        const id = req.params.id;
        //finding the person by id
        const person = await People.findOne({_id:id});
        if(person){
            return res.status(200).json(person);
        }
        else{
            return res.status(404).json({msg:"Not found"});
        }
        
    }
    catch (error){
        return res.status(500).json({ message: (error as Error).message });
    }
  });
router.post("/",async (req:Express.Request,res:Express.Response)=>{
    try{
        //getting the data from the request body
        const {firstName, lastName} = req.body;
        //creating a new person
        const person = new People({firstName, lastName});
//we could use  new People(req.body); instead of the above but this is better check our attributes
        // console.log(person);
        //saving the person in our data base 
        const saved = await person.save();
        //returning the saved person's id 
        return res.status(201).json({msg:"saved successfully", id:saved._id});
    }
    catch (error){
        return res.status(500).json({ message: (error as Error).message });
    }
  })

module.exports = router;