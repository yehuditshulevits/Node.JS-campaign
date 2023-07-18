const mongoose = require('mongoose');
const connect = async () => {

    await mongoose.connect(process.env.DATABASE_URL)
    console.log('connected');

}
const disconnect = () => { }


module.exports = { connect, disconnect }