const accountSchemaModel = require("../models/DB/acountsScemaModel");

exports.userAccounts =(req,res)=>{
    accountSchemaModel.find((err,accounts)=>{
        if(err)
        {
            console.log("accounts Page Error");
        }
        else
        {
            res.render('accounts',{title:"Account Page",accounts:accounts});
        }
    })
}

exports.accountRegistrationPage = (req,res)=>{
    res.render("accountRegistration");
}

exports.accountInfoStore = (req,res)=>{
    var accountsInfo = {
        acountEmployeeName: req.body.acountEmployeeName,
        employeeRole: req.body.employeeRole,
        employeeId : req.body.employeeId,
        accountUserName: req.body.accountUserName,
        accountPassword: req.body.accountPassword
    }

    const saveInfo = accountSchemaModel(accountsInfo);
    saveInfo.save((err)=>{
        if(err)
        {
            console.log("Account Registration Error");
        }
        else
        {
            res.redirect("/accounts");
        }
    })
}

exports.accountEditPage = (req,res)=>{
    accountSchemaModel.findById(req.params.id,(err,account)=>{
        if(err)
        {
            console.log("Account Edit Page Error");
        }
        else
        {
            res.render("accountsEditPage",{account:account});
        }
    })
}

exports.accountEditPageInfo = (req,res)=>{
    var editaccountInfo = {
        acountEmployeeName: req.body.acountEmployeeName,
        employeeRole: req.body.employeeRole,
        employeeId : req.body.employeeId,
        accountUserName: req.body.accountUserName,
        accountPassword: req.body.accountPassword
    }

    accountSchemaModel.findByIdAndUpdate(req.params.id,editaccountInfo,(err)=>{
        if(err)
        {
            console.log("Account Update Error");
        }
        else
        {
            res.redirect("/accounts");
        }
    })
}

exports.accountDelete=(req,res)=>{
    accountSchemaModel.findByIdAndDelete(req.params.id,(err)=>{
        if(err)
        {
            console.log("Account Delete Error");
        }
        else
        {
            res.redirect("/accounts");
        }
    })
}