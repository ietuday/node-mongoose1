var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var schoolModel = new Schema({
    S_Name: {
        type: String
    },
    S_address: {
        type: String
    },
    S_phoneno: {
        type: Number
    },
    S_course: {
        type: Schema.Types.ObjectId, 
        ref: 'Course'
    }
});

module.exports = mongoose.model('School', schoolModel);