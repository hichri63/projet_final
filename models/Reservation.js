const mongoose = require('mongoose');
const ReservationSchema = mongoose.Schema({
    id_cl: {
        type: String
    },
    id_trans: {
        type: String
    }, id_ann: {
        type: String
    },
    nom: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    poid:{
        type:String,
        required:true
    },
    colis: {
        type: String,
        requie: true
    },
    etat:{
        type:String,
        default:"En attente"
    },
    date: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('reservation', ReservationSchema)
