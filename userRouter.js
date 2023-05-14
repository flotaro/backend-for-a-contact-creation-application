const express = require('express')
const router = express.Router()
const {loginUser, signUser, currentUser} = require('../controller/userController')
router.post('/login', loginUser)
router.post('/signin', signUser)
router.get('/info', currentUser)
module.exports = router