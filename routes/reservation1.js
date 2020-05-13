const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../middelware/auth')
// const Reservation=require('../models/Reservation');
const Reservation=require('../models/Reservation')

//Get all reservation
router.get('/', (req, res) => {
    Reservation.find()
        .then(reservations=> res.json(reservations))
        .catch(err => console.error(err.message))
})
// post la reservation d'un client 
router.post('/',[auth,[
    check('nom','nom is required').not().isEmpty(),
    check('email','Phone is required').not().isEmpty(),
    check('colis','Colis is required').not().isEmpty(),
]], (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.json({errors:errors.array()})
    }
    const {nom,email,colis,poid,id_cl,id_trans,id_ann}= req.body
    const reservation= new Reservation({
        id_cl,
        id_trans, 
        id_ann,
        nom, 
        email,
        colis,
        poid,
    })  
    reservation.save()
    .then((result)=>res.json(result))
    .catch((err)=>console.log(err.message))
})
module.exports=router
//update accepte reservation
router.put("/reserve/:id",auth,(req,res)=>{
    Reservation.findByIdAndUpdate(req.params.id,{$set:{etat:'accepter'}},(err,data)=>{
        res.json(data)
    })
    
})
