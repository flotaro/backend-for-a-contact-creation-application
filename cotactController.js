const Contacts = require('../models/contactModels')
const asyncHandler = require('express-async-handler')
const getContact = asyncHandler(async (req, res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    res.status(200).json(contact)
})
const createContact = asyncHandler(async (req, res)=>{
    console.log('the given info is', req.body)
    const {name, email, phone} = req.body
    if (!name || !email || !phone){
        res.status(400)
        throw new Error("Please enter your informations")
    }
    const contact = await Contacts.create({
        name, email, phone
    })
    res.status(200).json(contact)
})
const deleteContact = asyncHandler(async (req, res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const deletedContact = await Contacts.findByIdAndDelete(
        req.params.id,
    )
    res.status(200).json(deletedContact)
})
const updateContact = asyncHandler(async (req, res)=>{
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})
module.exports = {getContact, createContact, deleteContact, updateContact}