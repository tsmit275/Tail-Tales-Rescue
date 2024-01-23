const router = require('express').Router();
const db = require('../../models');
const Volunteer = db.volunteer;

router.post('/', async (req,res)=>{
    try {
        const newVolunteer = await Volunteer.create(req.body)
        return res.status(200).send(newVolunteer);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.put('/:id', async (req,res)=>{
    try {
        const foundVolunteer = await Volunteer.findOne({
            where: {
                id: req.params.id
            }
        });
        await foundVolunteer.update(req.body);
        return res.status(200).send(true);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.get('/', async (req, res) => {
    const allVolunteers = await Volunteer.findAll();
    return res.status(200).send(allVolunteers);
})

router.delete('/:id', async (req, res) => {
    try {
        await Volunteer.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).send(true);
    }catch(e){
        return res.status(400).send(e.message);
    }
})
module.exports = router;
