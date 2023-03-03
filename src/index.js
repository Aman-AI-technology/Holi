const express = require('express')
const mongoose = require('mongoose')
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const path = require('path');
app.use(cookieParser())
const route = require('./routes/route');
require('dotenv').config()

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

mongoose.set("strictQuery", false);

var redis = require("redis");
var client = redis.createClient();
var client = redis.createClient('127.0.0.1', 6379);
  
client.on("connect", function() {
  console.log("Connection Successful!!");
});


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

    app.use('/', route);


    app.listen(process.env.Port || 3000, () => {
        console.log("Server is running on ", 3000)
    })
