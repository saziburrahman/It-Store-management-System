const express = require('express');
const app = express();
const dataBaseConnection = require('./models/DB/dataBase');
var bodyParser = require('body-parser');
const Port = 8080;
const homeRoute = require('./routes/home.route');
const employeeRoute = require('./routes/admin.route');
const productRoute = require('./routes/products.route');
const sellersRoute = require('./routes/seller.route');
const accountsRouter = require("./routes/accounts.route");
const userDashboardRoute = require("./routes/userDashboardRoute");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static('assets'));
app.use(homeRoute);
app.use(employeeRoute);
app.use(productRoute);
app.use(sellersRoute);
app.use(accountsRouter);
app.use(userDashboardRoute);


app.listen(Port,(req,res)=>{
    console.log(`Your Server is Running at http://127.0.0.1:${Port}`);
});