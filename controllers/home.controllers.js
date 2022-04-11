const accountsSchemaModel = require("../models/DB/acountsScemaModel");
const employeeSchemaModel = require("../models/DB/employeeSchema");
const productSchemaModel = require("../models/DB/productSchema");
const sellerSchemaModel = require("../models/DB/sellersSchema");
exports.home = (req,res)=>{
    res.render('login',{message:""});
}
exports.login = (req,res)=>{
    const {loginUserName,loginPassword}= req.body;
    accountsSchemaModel.find({accountUserName:loginUserName,accountPassword:loginPassword},(err,user)=>{
        if(err){
            console.log("Error");
        }
        else
        {
            if(user.length>0)
            {
                user.forEach((e)=>{
                    if(e.accountUserName == loginUserName && e.accountPassword == loginPassword)
                    {
                        if(e.employeeRole == 2){
                            res.redirect("/userDashboard");
                        }
                        else if(e.employeeRole == 1){
                            res.redirect("/admin");
                        }
                    }
                })
            }
            else
            {
                res.render("login", {message:"Invalid UserName or Password"});
            }
        }
    })
    
}

exports.adminPage =(req,res)=>{
   
    res.render('admin',{
        title:"Admin DashBoard"
    });
}



exports.adminNavPage =(req,res)=>{
    const urlGetName= req.query.name;
    if(urlGetName=='dashboard')
    {
        res.redirect("/admin")

    }
    if(urlGetName=='user')
    {
        res.redirect("/user");
    }
    if(urlGetName=='product')
    {
        res.redirect('/product');
    }
    if(urlGetName=='seller')
    {
        res.redirect("/seller");
    }
    if(urlGetName=='account')
    {
        res.redirect("/accounts");
    }
}
