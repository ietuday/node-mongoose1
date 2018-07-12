var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var schoolModel = new Schema({
    longName:{type: String},
    shortName:{type: String}
});

module.exports = mongoose.model('School', schoolModel);