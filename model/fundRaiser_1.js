const mongoose = require('mongoose');

//1. create schema
const fundraiserSchema = mongoose.Schema({
    group:Number,
    name:String,
    phone:String,
    target:Number
    //contributions:[1]
})
//2. create model
const fundraiser = mongoose.model('fundraisers', fundraiserSchema);

//3. export model
module.exports = fundraiser;