const mongoose = require('mongoose')

const connectScheme = mongoose.Schema({
    name: {
        type: String,
        require: [true, "PLEASE PROVIDE YOUR NAME"]
    },
    email: {
        type: String,
        require: [true, "PLEASE PROVIDE YOUR Email"]
    },
    phone: {
        type: String,
        require: [true, "PLEASE PROVIDE YOUR PHONE NUMBER"]
    }
},
{
    timestamps: true
})
module.exports = mongoose.model('Contacts', connectScheme)