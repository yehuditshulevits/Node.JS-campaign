const mongoose = require('mongoose');

//1. create schema
const groupSchema = mongoose.Schema({
    name:String, 
    target:Number
})
//2. create model
const group = mongoose.model('groups', groupSchema);

//3. export model
module.exports = group;