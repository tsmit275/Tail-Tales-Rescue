const router = require('express').Router();
const db = require('../../models');
const Volunteer = db.volunteer;

router.post('/', async (req,res)=>{
    const newVolunteer = await Volunteer.create(req.body)
    return res.status(200).send(newVolunteer);
})

module.exports = router;