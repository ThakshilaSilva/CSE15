var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//var connection = require('./dbConnection');
var UserControllers = require('./controllers/userController');

var app =express();

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('Server is listening on port 3000');
    }
});

app.get('/',(req, res) =>{
    res.send("Server working!");
});

app.post("/get_user", (req, res) => {
    UserControllers.getUser(req.body).then((result) =>{
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.post("/add_new_user", (req, res) => {
    UserControllers.addNewUser(req.body).then((result) =>{
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
});