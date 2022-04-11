const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ITStore",{ useNewUrlParser: true })
.then(()=>{
    console.log('Connected Successfully');
})
.catch(()=>{
    console.log('Not Connected');
})