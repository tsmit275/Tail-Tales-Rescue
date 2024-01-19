const router = require('express').Router();
const db = require('../../models');
const Animals = db.animals;

router.get('/', async (req,res)=>{
    const allAnimals = await Animals.findAll();

    return res.status(200).send(allAnimals);
})

// router.get('/cats', async (req, res) => {
//     const allCats = await Animals.find({type: "cat"});
//     return res.status(200).send(allCats);
// })

module.exports = router;