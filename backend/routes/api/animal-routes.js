const router = require('express').Router();
const db = require('../../models');
const Animals = db.animals;

router.get('/', async (req,res)=>{
    const allAnimals = await Animals.findAll();
    return res.status(200).send(allAnimals);
})

router.post('/', async (req, res) => {
    try {
        const newAnimal = await Animals.create(req.body);
        return res.status(200).send(newAnimal);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.get('/:id', async (req, res)=> {
    if (!req.params.id){
        return res.status(404).send({message: "No Id Given"})
    }
    const foundAnimal = await Animals.findOne({
        where: {id: req.params.id }
    })

    return res.status(200).send(foundAnimal);
})

router.put('/:id', async (req, res) => {
    try {
        const foundAnimal = await Animals.findOne({
            where: {
                id: req.params.id,
            }
        });
        await foundAnimal.update(req.body);
        return res.status(200).send(true);
    }catch(e){
        return res.status(400).send(e.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Animals.destroy({
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
