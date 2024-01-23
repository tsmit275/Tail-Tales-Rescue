const router = require('express').Router();
const db = require('../../models');
const Contact = db.contact;

router.post('/', async (req,res)=>{
    try {
        const newContact = await Contact.create(req.body)
        return res.status(200).send(newContact);
    }catch(e){
        return res.status(400).send(e.message);
    }

})

module.exports = router;
