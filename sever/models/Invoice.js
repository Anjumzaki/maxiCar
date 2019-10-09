const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InvoiceSchema = new Schema({
  _id: mongoose.Types.ObjectId,
//   name: {
//     type: String,
//     // required: true
//   },
  addressLine1: {
    type: String,
    // required: true
  },
  addressLine2: {
    type: String,
    // required: true
  },
  emailFrom: {
    type: String,
  },
  mobileNumberFrom: {
    type: String,
    // required: true
  },
  owner: {
    type: String,
    // required: true
  },
  firstName: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  emailTo: {
    type: String,
    // required: true
  },
  mobileNumberTo: {
    type: String
  },
  challanNumber: {
    type: String
  },
  billingDate: {
    type: Date,
    // required: true
  },
  dueDate:{
    type: Date
  },
  status: {
    type: String,
    // required: true
  },
  description1: {
    type: String
  },
  description2: {
    type: String
  },
  description3: {
    type: String
  },
  description4: {
    type: String
  },
  description5: {
    type: String
  },
  description6: {
    type: String
  },
  description7: {
    type: String
  },
  quantity1: {
    type: Number
  },
  quantity2: {
    type: Number
  },
  quantity3: {
    type: Number
  },
  quantity4: {
    type: Number
  },
  quantity5: {
    type: Number
  },
  quantity6: {
    type: Number
  },
  quantity7: {
    type: Number
  },
  amount1: {
    type: Number
  },
  amount2: {
    type: Number
  },
  amount3: {
    type: Number
  },
  amount4: {
    type: Number
  },
  amount5: {
    type: Number
  },
  amount6: {
    type: Number
  },
  amount7: {
    type: Number
  },
  tax1: {
    type: Number
  },
  tax2: {
    type: Number
  },
  tax3: {
    type: Number
  },
  tax4: {
    type: Number
  },
  tax5: {
    type: Number
  },
  tax6: {
    type: Number
  },
  tax7: {
    type: Number
  },
  discount: {
    type: Number
  },
  totalAmount: {
    type: Number  
  },
  ownerNote: {
    type: String
  }
});

module.exports = Owner = mongoose.model('invoices', InvoiceSchema);