const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productInfo = new Schema ({
    productBrandName: String,
    productCategory:String,
    productQuantity: Number,
    productParchageDate:Date,
    productWarrenty:String,
    productSeller:String,
    productPrice:Number


});

module.exports = mongoose.model('products',productInfo);