const express = require('express');
const app = express();
const { home, login, userPage, adminPage, adminNavPage, productList, sellerList, userAccounts } = require('../controllers/home.controllers');
const router = express.Router();

router.get('/',home);
router.post('/',login)

router.get('/admin',adminPage);
router.get('/account',adminNavPage);



module.exports = router;