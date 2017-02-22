const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const resourceSchema = new Schema({
  // example of optional fields
  item:         { type: String, required: true },
  description:  { type: String, required: true, default: '' },
  price:        { type: Number, required: true },
  createdAt:    { type: Date, default: Date.now },
  imgLink: 		 { type: Date, default: Date.now },
  category:     { type: String },
  forSale:      { type: Number, default: true }
})


module.exports = resourceSchema
