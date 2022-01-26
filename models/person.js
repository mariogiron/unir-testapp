const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('person', personSchema);