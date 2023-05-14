const express = require('express');
const errorHandler = require('./errorHandler/errorHandler');
const connectDB = require('./config/dbConnection');
const app = express()
connectDB()
app.use(express.json())
app.use('/api/contacts', require('../backend/route/contactRouter'))
app.use('/api/users', require('../backend/route/userRouter'))
app.use(errorHandler)
app.listen(3000, ()=>
{
    console.log('Welcome to my house')
})