const mongoose = require('mongoose');

// Define the schema
const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('Country', countrySchema);
