const router = require('express').Router();
const db = require('../../models');
const Adoption = db.adoption;

router.get('/', async (req,res)=>{
    const alladoption = await db.adoption.findAll();

    return res.status(200).send(alladoption);
})

module.exports = router;