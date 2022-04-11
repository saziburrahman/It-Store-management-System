const express = require("express");
const { sellerList, registerSeller, registerSellerSave, sellerEditPage, sellerUpdate, sellerInfoDelete } = require("../controllers/sellers.controller");
const router = express.Router();


router.get('/seller',sellerList);
router.get('/registerSeller',registerSeller);
router.post('/registerSeller',registerSellerSave);
router.get("/sellerEdit/:id",sellerEditPage);
router.post("/sellerEdit/:id",sellerUpdate);
router.get("/sellerDelete/:id",sellerInfoDelete);


module.exports = router;