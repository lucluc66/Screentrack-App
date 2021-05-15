var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('../schema/Data');

const dbRoute =
    'mongodb+srv://dbUser:dbUserPassword@cluster0.0wfsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';//*

    mongoose.connect(dbRoute, { useUnifiedTopology: true });//*
let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*


let idAssign = 0;

// Get request
router.get('/credentials/', function(req, res, next) {
    Data.find(function (err, data) {
        if (err) {
            return res.json({ success: false, error: err });
        } 
        return res.json({ success: true, info: data })
        
    });
});

// Post request
router.post('/credentials/', function (req, res, next){
    let newUser = req.body.username;
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    console.log({id: idAssign, user: newUser, email: newEmail, password: newPassword});

    let stuffToAdd = new Data();
    stuffToAdd.username = newUser;
    stuffToAdd.email = newEmail;
    stuffToAdd.password = newPassword;
    stuffToAdd.id = idAssign;

    stuffToAdd.save((err)=>{
        if(err){
            return res.json({success:false, error:err});
        }else{
            return res.json({success:true});
        }
    });

    idAssign++;
})

// Delete request
router.delete('/credentials/', function (req, res, next) {
    let newUser = req.body.username;
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    Data.findOneAndRemove({ username: newUser }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

    
    
})

// Put request
router.put('/credentials/', function (req, res, next) {
    Data.updateOne({email: req.body.email }, {password: req.body.password}, (err) => {
     if (err) return res.json({ success: false, error: err });
     return res.json({ success: true });
    })
  
 })

// Get Specific
router.get('/credentials/', function(req, res, next) {
    Data.findOne({username: req.body.username}, function (err, data) {
        if (err) {
            return res.json({ success: false, error: err });
        } 
        return res.json({ success: true, info: data })
        
    });
});

module.exports = router;