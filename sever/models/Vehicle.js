const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema({

      _id: mongoose.Types.ObjectId,
      ownerId: {
        type: String,
      },
      vehicleBrand: {
        type: String,
        // required: true
      },
      vehicleType: {
        type: String,
        // required: true
      },
      vehicleModel: {
        type: String,
        // required: true
      },
      vehicleType: {
        type: String,
      },
      vehicleColor: {
        type: String,
        // required: true
      },
      purchaseYear: {
        type: Date,
        // required: true
      },
      plates: {
        type: String,
        // required: true
      },
      vehicleIdentificationNumber: {
        type: String,
        // required: true
      },
      registartionDate: {
        type: Date,
        // required: true
      },
      ownerName: {
        type: String
      },
      carStatus: {
        type: String
      },
      status: {
        type: Boolean,
        // required: true
      },
      createdDate:{
        type: Date
      }
    
});

module.exports = Vehicle = mongoose.model('vehicles', VehicleSchema);