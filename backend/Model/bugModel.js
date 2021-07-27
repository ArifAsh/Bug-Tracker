const mongoose = require('mongoose')

const bugSchema = mongoose.Schema({
    // bugId:{
    //     type:String,
    //     default:""
    // },
    bugName:{
        type:String,
        default:""
    },
    bugDetails:{
        type:String,
        default:""
    },
    bugSteps:{
        type:String,
        default:""
    },
    bugType:{
        type: Number,
        default:1
    },
    bugPriority:{
        type: Number,
        default:1
    },
    bugAssigned:{
        type: String,
        default: "",
    },
    bugCreator:{
        type:String,
        default: ""
    },
    timeStamp:{
        type:Date,
        default:Date.now()
    },
})
const model = mongoose.model('bugModel',bugSchema)

module.exports = model;