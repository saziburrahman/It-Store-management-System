const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var sellerData = new Schema({
    sellerOrganigationName: String,
    sellerOrganigationBranch:String,
    sellerOrganigationProduct:String,
    sellerOrganigationBillingId:String,
    sellerOrganigationContact:Number
})

module.exports = mongoose.model('sellers',sellerData);