const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var allocateProductInfo = new Schema({
    allocateUserName:String,
    employeeID: String,
    allocateProductName: String,
    productId:String,
    allocateProductQuantity:Number,
    allocateProductIssueDate:Date,
    allocateProductRemarks:String
});


module.exports = mongoose.model("inventory",allocateProductInfo);