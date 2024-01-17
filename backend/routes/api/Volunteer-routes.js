const router = require('express').Router();
const db = require('../../models');
const Volunteer = db.volunteer;

router.get('/', async (req,res)=>{
    const allVolunteer = await db.allVolunteer.findAll();

    return res.status(200).send(allVolunteer);
})

module.exports = router;