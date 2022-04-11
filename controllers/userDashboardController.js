const employeeSchemaModel = require("../models/DB/employeeSchema");
const productSchemaModel = require("../models/DB/productSchema");
const productAllocationModel = require("../models/DB/productAllocateSchemaModel");

exports.userDashboard = (req,res)=>{
    res.render("UserDashBoard");
}

exports.getEmployeeName = async(req,res)=>{
    let employeeInputValue = req.body.payload.trim();

    let search = await employeeSchemaModel.find({employeeName: {$regex:new RegExp('^'+employeeInputValue+'.*','i') }}).exec();
    search = search.slice(0,10);

    res.send({payload:search});
}
exports.getProductName = async(req,res)=>{
    let productInputValue = req.body.payload.trim();

    let search = await productSchemaModel.find({productCategory: {$regex:new RegExp('^'+productInputValue+'.*','i') }}).exec();
    search = search.slice(0,10);

    res.send({payload:search});
}

exports.userProductAllocation = (req,res)=>{
    var collectedInfo ={
        allocateUserName:req.body.allocateUserName,
        employeeID: req.body.employeeID,
        allocateProductName: req.body.allocateProductName,
        productId:req.body.productId,
        allocateProductQuantity:req.body.allocateProductQuantity,
        allocateProductIssueDate:req.body.allocateProductIssueDate,
        allocateProductRemarks:req.body.allocateProductRemarks
    }

    const dataSave = productAllocationModel(collectedInfo);

    dataSave.save()
    .then(()=>{
        res.redirect("/userDashboard");
    })
    .catch(()=>{
        console.log("Error in Data Save");
    });

}

exports.userDashboardEmployeeList = (req,res)=>{
    employeeSchemaModel.find((err,employees)=>{
        if(err)
        {
            console.log("User Dashboard EmplyeeList Error");
        }
        else
        {
            res.render("userDashboardEmployeeList",{employees:employees});
        }
    })
}

exports.userEmplyeeRegistration =(req,res)=>{
    res.render("userDashboardEmployeeRegistration");
}

exports.userEmplyeeSave = (req,res)=>{
    const employeeDetails = {
        employeeName: req.body.employeeName,
        employeeEmail:req.body.employeeEmail,
        employeePhone: req.body.employeePhone,
        employeeAddress:req.body.employeeAddress,
        employeeGender: req.body.employeeGender,
        employeeDesignation: req.body.employeeDesignation,
        employeeDepertment: req.body.employeeDepertment
    }


    let info = employeeSchemaModel(employeeDetails);
    info.save((err)=>{
        if(err){
            console.log("Employee Registration Error Happaned");
        }
        else
        {
            res.redirect('/userDashboardEmployeeList');
        }
    })
}

exports.userProductList = (req,res)=>{
    productSchemaModel.find((err,products)=>{
        if(err)
        {
            console.log("Product Find Probel");
        }
        else
        {
            res.render("userDashboardProductList",{products:products});
        }
    })
}

exports.userAddProduct =(req,res)=>{
    res.render("userAddProduct");
}

exports.userAddProductSave =(req,res)=>{
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
            res.redirect("/userDashboardProductList");
        }
    })
}