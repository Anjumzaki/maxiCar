const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PoliceSchema = new Schema({

      _id: mongoose.Types.ObjectId,
      policeId: {
        type: String,
      },
      ownerName: {
        type: String,
        // required: true
      },
      ownerId: {
        type: String,
        // required: true
      },
      vehicleId: {
        type: String,
      },
      invoiceId: {
        type: String,
        // required: true
      },
      date: {
        type: String,
      },
      time: {
        type: String,
        // required: true
      }
    
});

module.exports = Police = mongoose.model('police', PoliceSchema);