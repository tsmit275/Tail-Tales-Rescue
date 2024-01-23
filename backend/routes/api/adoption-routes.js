const router = require('express').Router();
const db = require('../../models');
const Adoption = db.adoption;

router.post('/', async (req,res)=>{
    try {
        const newAdoption = await Adoption.create(req.body)
        return res.status(200).send(newAdoption);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.put('/:id', async (req,res)=>{
    try {
        const foundAdoption = await Adoption.findOne({
            where: {
                id: req.params.id
            }
        });
        await foundAdoption.update(req.body);
        return res.status(200).send(true);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.get('/', async(req, res) => {
    const allAdoptions = await Adoption.findAll()
    return res.status(200).send(allAdoptions);
})

router.delete('/:id', async (req, res) => {
    try {
        await Adoption.destroy({
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
