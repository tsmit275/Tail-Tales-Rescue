const router = require('express').Router();
const db = require('../../models');
const Adoption = db.adoption;

router.post('/', async (req,res)=>{
    const newAdoption = await Adoption.create(req.body)
    return res.status(200).send(newAdoption);
})

module.exports = router;