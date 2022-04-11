const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var accountsInfo = new Schema({
    acountEmployeeName:String,
    employeeRole:Number,
    employeeId : String,
    accountUserName:String,
    accountPassword:String,

});

module.exports = mongoose.model("storeStaffAccount",accountsInfo);