const express=require('express');
const { default: mongoose }=require('mongoose');
const cors = require("cors")
const route=require('./src/routes/route.js');
require("dotenv").config()
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: true }))

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});


