const sellerInfoModel = require('../models/DB/sellersSchema');


exports.sellerList =(req,res)=>{
    sellerInfoModel.find((err,sellers)=>{
        if(err){
            console.log("Seller Information Error");
        }
        else
        {
            res.render('sellers',{sellers:sellers,title:"Seller List"});
        }
    })
    
}

exports.registerSeller =(req,res)=>{
    res.render('registerSeller');
}

exports.registerSellerSave =(req,res)=>{
    var sellerData = {
        sellerOrganigationName: req.body.sellerOrganigationName,
        sellerOrganigationBranch:req.body.sellerOrganigationBranch,
        sellerOrganigationProduct:req.body.sellerOrganigationProduct,
        sellerOrganigationBillingId:req.body.sellerOrganigationBillingId,
        sellerOrganigationContact:req.body.sellerOrganigationContact
    }

    let sellerDataSave = sellerInfoModel(sellerData);
    sellerDataSave.save((err)=>{
        if(err)
        {
            console.log("Seller Info Save Error");
        }
        else
        {
            res.redirect("/seller");
        }
    })
}
exports.sellerEditPage =(req,res)=>{
    sellerInfoModel.findById(req.params.id,(err,seller)=>{
        if(err)
        {
            console.log("Seller Info Error");
        }
        else
        {
            res.render("sellerInfoEdit",{seller:seller});
        }
    })
}
exports.sellerUpdate = (req,res)=>{
    var sellerUpdatedData = {
        sellerOrganigationName: req.body.sellerOrganigationName,
        sellerOrganigationBranch:req.body.sellerOrganigationBranch,
        sellerOrganigationProduct:req.body.sellerOrganigationProduct,
        sellerOrganigationBillingId:req.body.sellerOrganigationBillingId,
        sellerOrganigationContact:req.body.sellerOrganigationContact
    }

    sellerInfoModel.findByIdAndUpdate(req.params.id,sellerUpdatedData,(err)=>{
        if(err)
        {
            console.log("Seller Updated Data Error");
        }
        else
        {
            res.redirect("/seller");
        }
    })
}

exports.sellerInfoDelete = (req,res)=>{
    sellerInfoModel.findByIdAndDelete(req.params.id,(err)=>{
        if(err)
        {
            console.log("Seler Delete Error");
        }
        else
        {
            res.redirect("/seller");
        }
    })
}
