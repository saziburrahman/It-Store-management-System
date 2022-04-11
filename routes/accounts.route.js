const express = require("express");
const { userAccounts, accountRegistrationPage, accountInfoStore, accountEditPage, accountEditPageInfo, accountDelete } = require("../controllers/accounts.controller");
const employeeModel = require("../models/DB/employeeSchema");
const router = express.Router();


router.get('/accounts',userAccounts);
router.get("/accountRegistration",accountRegistrationPage);
router.post("/accountRegistration",accountInfoStore);
router.get("/editAccount/:id",accountEditPage);
router.post("/editAccount/:id",accountEditPageInfo);
router.get("/editAccountDelete/:id",accountDelete);

router.post('/getFruits', async (req,res)=>{
    let payload = req.body.payload.trim();
    // console.log(payload);
    let search = await employeeModel.find({employeeName: {$regex:new RegExp('^'+payload+'.*','i') }}).exec();
    // console.log(search);
    //Limit Search Result to 10
    search = search.slice(0,10);

    res.send({payload:search});
})

module.exports = router;