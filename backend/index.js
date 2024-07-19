const express = require("express");  
const bodyParser = require('body-parser');  
const cookieParser = require('cookie-parser'); 
const cors = require('cors');

require("./db/database");

const mainRouter = require("./routes/main");


const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(express.json())
app.use(cookieParser()); 

app.set('view engine', 'ejs');

app.use('/', mainRouter);  

app.listen(8000, () => {  
    console.log("Server started");
});

module.exports = app;