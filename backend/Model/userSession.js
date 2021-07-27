const mongoose = require('mongoose')

const userSessionSchema = mongoose.Schema({
    userId:{
        type:String,
        default:""
    },
    timeStamp:{
        type:Date,
        default:Date.now()
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
const model = mongoose.model('userSession',userSessionSchema)

module.exports = model;