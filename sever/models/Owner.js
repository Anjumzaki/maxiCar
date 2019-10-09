const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OwnersSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'owners'
  },
  name: {
    type: String,
    // required: true
  },
  dateOfBirth: {
    type: Date,
    // required: true
  },
  gender: {
    type: String,
    // required: true
  },
  age: {
    type: Number,
    // required: true
  },
  mobileNumber: {
    type: Number,
    // required: true
  },
  IPNumber: {
    type: Number,
    // required: true
  },
  CURP: {
    type: Number,
    // required: true
  },
  drivingLicenseNumber: {
    type: String,
    // required: true
  },
  insurranceCompany: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  street: {
    type: String,
    // required: true
  },
  nieghbourhood: {
    type: String,
    // required: true
  },
  city: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  postalCode: {
    type: String,
    // required: true
  },
  picture: {
    type: String,
    // required: true
  },
  createdDate : {
    type: Date
  },
  status : {
    type: Boolean
  }
});

module.exports = Owner = mongoose.model('owners', OwnersSchema);