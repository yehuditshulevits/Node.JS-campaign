const mongoose = require('mongoose');

//1. create schema
const donateSchema = mongoose.Schema({
    // customId: {
    //     type: Number,
    //     required: true,
    //     unique: true
    //   },
    name:String,
    phone:String,
    amount: Number,
    fundRaiserId: { type: Number, required: true }
})
// Pre-save middleware to assign sequential numbers to customId field
// donateSchema.pre('save', function (next) {
//   const doc = this;
//   if (doc.isNew) {
//     // Find the highest existing customId and increment it by 1
//     MyModel.findOne({}, {}, { sort: { 'customId': -1 } })
//       .then((lastDoc) => {
//         if (lastDoc) {
//           doc.customId = lastDoc.customId + 1;
//         } else {
//           doc.customId = 1;
//         }
//         next();
//       })
//       .catch((error) => {
//         next(error);
//       });
//   } else {
//     next();
//   }
// });

//2. create model
const donate = mongoose.model('donates', donateSchema);

//3. export model
module.exports = donate;

