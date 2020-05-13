const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../middelware/auth')

const Annonce=require('../models/Annonce')



// Get All Annonce
router.get('/ann', (req, res) => {
    Annonce.find()
        .then(annonces=> res.json(annonces))
        .catch(err => console.error(err.message))
})

//Get annonce 
//private Route
router.get('/',auth,(req,res)=>{
    Annonce.find({user:req.user.id}).sort({date:-1})
    .then(annonces=>res.json(annonces))
    .catch(err=>console.log(err.message))
})
//Add annonce
//private Route
router.post('/',[auth,[
    check('Datedep','date is required').not().isEmpty(),
    check('villedep','villedep is required').not().isEmpty(),
    check('villearr','villearr is required').not().isEmpty(),
    check('imagevoiture','imagevoiture is required').not().isEmpty(),

]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.json({errors:errors.array()})
    }
    const {Datedep,villedep,villearr,imagevoiture}=req.body
    const annonces= new Annonce({
        Datedep,
        villedep,
        villearr,
        imagevoiture,
        user:req.user.id
    })
    console.log(annonces)
    annonces.save()
    .then((annonce)=>res.json(annonce))
    .catch(err=>console.log(err.message))
})


//update annonce
//private route
router.put('/:id',auth,(req,res)=>{
    const {Datedep,villedep,villearr,imagevoiture}=req.body
    // build annonce object
    let annonceFields={}
    if(Datedep) annonceFields.Datedep=Datedep
    if(villedep) annonceFields.villedep=villedep
    if(villearr) annonceFields.villearr=villearr
    if(imagevoiture) annonceFields.imagevoiture=imagevoiture

    //test if annonce exist or not
    Annonce.findById(req.params.id)
    .then(annonce=>{
        if (!annonce){
            return res.json({msg:' Annonce not found'})
        } else if (annonce.user.toString() !==req.user.id){
            res.json({msg:'not authorized'})
        }else{
            Annonce.findByIdAndUpdate(req.params.id,{$set:annonceFields},(err,data)=>{
                res.json({msg:"Annonce Updated"})
            })
        }

    })
    .catch(err=>console.log(err.message))

})



//delete annonce
//private route
router.delete('/:id',auth,(req,res)=>{
    Annonce.findById(req.params.id)
    .then(annonce=>{
        if (!annonce){
            return res.json({msg:' Annonce not found'})
        } else if (annonce.user.toString() !==req.user.id){
            res.json({msg:'not authorized'})
        }else{
            Annonce.findByIdAndDelete(req.params.id,(err,data)=>{
                res.json({msg:"Annonce Deleted ! "})
            })
        }

    })
    .catch(err=>console.log(err.message))
})

router.put("/Reserve/:id",auth,(req,res)=>{
    Annonce.findByIdAndUpdate(req.params.id,{$push:{reservation:{
        name:req.body.name,
        email:req.body.email,
        téléphone:req.body.téléphone,
        colis:req.body.colis,
        user:req.body.user


    }}},(err,data)=>{
        if(err) throw err
        res.json({msg:"annonce is reserved"})
    })
})











module.exports = router