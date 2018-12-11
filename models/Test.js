var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TestSchema = new Schema({
    Name: String,
});

var Ad = mongoose.model('Test', TestSchema, 'Test');
module.exports = Ad;