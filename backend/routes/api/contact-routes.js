const router = require('express').Router();
const db = require('../../models');
const Contact = db.contact;

router.post('/', async (req,res)=>{
    const newContact = await Contact.create(req.body)
    return res.status(200).send(newContact);
})

module.exports = router;