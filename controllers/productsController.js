const productSchemaModel = require('../models/DB/productSchema');
exports.addProducts = (req,res)=>{
    res.render('addProductPage');
}

exports.addProductsData = (req,res)=>{
    var productData = {
        productBrandName: req.body.productBrandName,
        productCategory:req.body.productCategory,
        productQuantity: req.body.productQuantity,
        productParchageDate:req.body.productParchageDate,
        productWarrenty:req.body.productWarrenty,
        productSeller:req.body.productSeller,
        productPrice:req.body.productPrice
    }

    const productDataCollection = productSchemaModel(productData);

    productDataCollection.save((err)=>{
        if(err)
        {
            console.log("Product Insertion Error");
        }
        else
        {
            res.redirect("/product");
        }
    })

}

exports.productList =(req,res)=>{
    productSchemaModel.find((err,products)=>{
        if(err)
        {
            console.log("Product Find Probel");
        }
        else
        {
            res.render("products",{products:products,title:"Product List"});
        }
    })
}


exports.editProductDetails = (req,res)=>{
    productSchemaModel.findById(req.params.id,(err,product)=>{
        if(err)
        {
            console.log("Product Edit Error");
        }
        else
        {
            res.render("productEditPage",{product:product});
        }
    })
}

exports.productUpdateDataSave = (req,res)=>{

    var productUpdatedData = {
        productBrandName: req.body.productBrandName,
        productCategory:req.body.productCategory,
        productQuantity: req.body.productQuantity,
        productParchageDate:req.body.productParchageDate,
        productWarrenty:req.body.productWarrenty,
        productSeller:req.body.productSeller,
        productPrice:req.body.productPrice
    }

    productSchemaModel.findByIdAndUpdate(req.params.id,productUpdatedData,(err)=>{
        if(err)
        {
            console.log("Product Update Error");
        }
        else
        {
            res.redirect("/product");
        }
    })
}


exports.productDelete = (req,res)=>{
    productSchemaModel.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            console.log("Product Delete Problem");
        }
        else
        {
            res.redirect("/product");
        }
    })
}