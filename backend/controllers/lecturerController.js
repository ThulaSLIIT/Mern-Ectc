const lecturerController = require('express').Router()
const Lecturer = require('../models/Lecturer')
const {verifyToken,verifyTokenAdmin} = require('../middlewares/verifyToken')

//get all
lecturerController.get('/',verifyToken,async(req,res) => {
    try{
        //req.query = {category : 'pizza'}
        const lecturers = await Lecturer.find(req.query)
        return res.status(200).json(lecturers)
    }
    catch(error){
        console.error(error);
    }
})

//get one
lecturerController.get('/find/:id',verifyToken,async(req,res) => {
    try{
        const lecturerId = req.params.id
        const lecturer = await Lecturer.findById(lecturerId)
        if(!lecturer) {
            return res.status(500).json({msg: "No lecturer with such ID!"})
        }
        return res.status(200).json(lecturer)
    }
    catch(error){
        console.error(error);
    }
})

//create lecturer
lecturerController.post('/add',verifyTokenAdmin,async(req,res) => {
    try{
        
        const newLecturer = await Lecturer.create({...req.body})
        return res.status(201).json(newLecturer)
    }
    catch(error){
        console.error(error);
    }
})

module.exports = lecturerController