var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var courseModel = new Schema({
    C_Name: {
        type: String
    },
    C_Duration:{
        type: String
    }
});

module.exports = mongoose.model('Course', courseModel);