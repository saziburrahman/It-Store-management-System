const express = require("express");
const { userDashboard, getEmployeeName, getProductName, userProductAllocation, userDashboardEmployeeList, userEmplyeeRegistration, userEmplyeeSave, userProductList, userAddProduct, userAddProductSave } = require("../controllers/userDashboardController");
const router = express.Router();


router.get("/userDashboard",userDashboard);
router.post("/userDashboard",userProductAllocation);
router.post("/getEmployeeName",getEmployeeName);
router.post("/getProductName",getProductName);
router.get("/userDashboardEmployeeList",userDashboardEmployeeList);
router.get("/userDashboardEmployeeRegistration",userEmplyeeRegistration);
router.post("/userDashboardEmployeeRegistration",userEmplyeeSave);
router.get("/userDashboardProductList",userProductList);
router.get("/userAddProduct",userAddProduct);
router.post("/userAddProduct",userAddProductSave);



module.exports = router;