const express = require('express');
const { employeeRegistrations, registaredEmployeeInputtedValue, userPage, editEmployeeInfo, editEmployeeInfoSave, deleteEmployeeInfo, adminLogOut } = require('../controllers/admin.controllers');
const router = express.Router();

router.get('/employeeRegistration',employeeRegistrations)
router.post('/employeeRegistration',registaredEmployeeInputtedValue);
router.get('/edit/:id',editEmployeeInfo);
router.post('/edit/:id',editEmployeeInfoSave);
router.get('/delete/:id',deleteEmployeeInfo);
router.get('/user',userPage);
router.get("/adminLogOut",adminLogOut);


module.exports = router ;