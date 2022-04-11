const employeeSchemaModel = require('../models/DB/employeeSchema');

exports.employeeRegistrations =(req,res)=>{
    res.render('employeeRegistration');
}


exports.registaredEmployeeInputtedValue =(req,res)=>{
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
            res.redirect('/user');
        }
    })
}

exports.userPage =(req,res)=>{
    employeeSchemaModel.find((err,users)=>{

        if(err){
            console.log("Employee Show Table Error");
        }
        else
        {
            res.render('user',{users:users,title:"Employee List"});
        }
    })
    
}

exports.editEmployeeInfo=(req,res)=>{
    employeeSchemaModel.findById(req.params.id,(err,user)=>{
        if(err){
            console.log('Employee Update Error Happaned');
        }
        else
        {
            res.render('employeeInfoEditPage',{user:user});
        }
    })
}

exports.editEmployeeInfoSave =(req,res)=>{
    const employeeDetails = {
        employeeName: req.body.employeeName,
        employeeEmail:req.body.employeeEmail,
        employeePhone: req.body.employeePhone,
        employeeAddress:req.body.employeeAddress,
        employeeGender: req.body.employeeGender,
        employeeDesignation: req.body.employeeDesignation,
        employeeDepertment: req.body.employeeDepertment
    }

    employeeSchemaModel.findByIdAndUpdate(req.params.id,employeeDetails,(err)=>{
        if(err)
        {
            console.log('Employee Update Error Happaned');
        }
        else
        {
            res.redirect("/user");
        }
    })

}

exports.deleteEmployeeInfo = (req,res)=>{
    employeeSchemaModel.findByIdAndDelete(req.params.id,(err)=>{
        if(err)
        {
            console.log("Employee Delete Action Problem");
        }
        else
        {
            res.redirect('/user');
        }
    })
}

exports.adminLogOut = (req,res)=>{
    res.redirect("/");
}