const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var employeeSchema = new Schema ({
    employeeName: String,
    employeeEmail:String,
    employeePhone: Number,
    employeeAddress:String,
    employeeGender:String,
    employeeDesignation: String,
    employeeDepertment: String
});

module.exports = mongoose.model('employeeInfo',employeeSchema);