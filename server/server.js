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


//        MODELS
const { User } = require('./models/user.js');

//        MIDDLEWARES
const { auth } = require('./middleware/auth.js');

//============================
//         USERS
//============================

app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})


app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save( (err, doc) => { // MONGO METHOD TO RETURN A VALUE, hold on the doc param
        if(err) return res.json({ success: false, err })
        res.status(200).json({
            success: true,
        })
    })
})

app.post('/api/users/login', (req, res) => {

    User.findOne({ 'email': req.body.email }, (err, user) => {
        if(!user) return res.json({ loginSuccess: false, message:'Auth failed, email not found' });

        user.comparePassword(req.body.password, (err, isMatch) => { //isMatch is true if the password matches
            if(!isMatch) return res.json({ loginSuccess: false, message: 'Wrong password' });

            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                res.cookie('w_auth', user.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})

app.get('/api/user/logout', auth, (req, res) => {
    
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
            if(err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })
        }
    )
})





const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})