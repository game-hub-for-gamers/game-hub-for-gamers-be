// this is a many users to many games
// many to many 

const router = require('express').Router()

const ManyDB = require("../models/manyModels")

router.post('/addgame',(req,res)=> {
  let {gameid , userid} = req.body;

})