const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const Users = require('../models/userModels')
const bcrypt  = require('bcrypt')
 const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.sendStatus(400);
        throw new Error("Please enter your info")
    }
    const user = await Users.findOne({ email })
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user : {
                username :user.username,
                email: user.email,
                id: user.id,
            }
        },'krishna1234', {
            expiresIn: '1m'
        } )
        res.sendStatus(200).json({ accessToken: accessToken })
    }else {
        console.log('all good')
        res.sendStatus(401)
        throw new Error('Password not matched')
    }
  
})
const signUser = asyncHandler(async (req, res) => {
    const {username , email, password} = req.body
    if(!username || !email || !password){
        res.sendStatus(400)
        throw new Error("All Fields Are Mendetory")
    }
    const userAvailable = await Users.findOne({ email })
    if (userAvailable){
        res.sendStatus(400)
        throw new Error("User already registered")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Hashed Password', hashedPassword)
    const user = await Users.create({
        username, email, password: hashedPassword
    })
    console.log('User Created ', user)
    if (user){
        res.sendStatus(200).json({_id: user.id, email: user.email})
    } else{
        res.sendStatus(400)
        throw new Error("Invalid user info")
    }
})
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: 'user info'})
})
module.exports = {loginUser, signUser, currentUser}