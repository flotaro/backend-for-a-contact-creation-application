const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    username: {
        type: String,
        require: [true, "PLEASE PROVIDE YOUR NAME"]
    },
    email: {
        type: String,
        require: [true, 'PLease Provide Your Email'],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        require: [true, "PLEASE PROVIDE PASSWORD"]
    }
},
{
    timestamps: true
})
module.exports = mongoose.model('User', userScheme)