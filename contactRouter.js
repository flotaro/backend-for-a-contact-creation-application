const express = require('express')
const router = express.Router()
const {getContact, createContact, deleteContact, updateContact} = require('../controller/cotactController')
router.route('/:id').get(getContact)
router.route('/:id').post(createContact)
router.route('/:id').put(updateContact)
router.route('/:id').delete(deleteContact)

module.exports = router;
