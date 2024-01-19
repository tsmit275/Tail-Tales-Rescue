const router = require('express').Router();
const db = require('../../models');
const Animals = db.animals;

router.get('/', async (req,res)=>{
    const allAnimals = await Animals.findAll();
    return res.status(200).send(allAnimals);
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

// router.get('/cats', async (req, res) => {
//     const allCats = await Animals.find({type: "cat"});
//     return res.status(200).send(allCats);
// })

module.exports = router;