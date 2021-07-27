const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
    userName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now

    },
   
});
schema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
schema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

const model = mongoose.model('newUser',schema)

module.exports = model;