const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = 10;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
})

//.pre means, before we do 'save', the below content will be triggered
userSchema.pre('save', function(next) {
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(salt, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(candidatePassword, cb){
    
}


const User = mongoose.model('User', userSchema);

module.exports = { User };