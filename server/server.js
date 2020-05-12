const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true } );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


//===========================
//        MODELS
//===========================

const { User } = require('./models/user.js');

//============================
//         USERS
//============================

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save( (err, doc) => { // MONGO METHOD TO RETURN A VALUE, hold on the doc param
        if(err) return res.json({ success: false, err })
        res.status(200).json({
            success: true,
            userData: doc
        })
    })
})

app.post('/api/users/login', (req, res) => {

    User.findOne({ 'email': req.body.email }, (err, user) => {
        if(!user) return res.json({ loginSuccess: false, message:'Auth failed, email not found' });

        user.comparePassword(req.body.password, (err, isMatch) => { //isMatch is true if the password matches

        })
    })
})







const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})