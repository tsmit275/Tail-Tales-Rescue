const router = require('express').Router();
const db = require('../../models');
const Adoption = db.adoption;

router.post('/', async (req,res)=>{
    const newAdoption = await Adoption.create(req.body)
    return res.status(200).send(newAdoption);
})

//http://localhost:3001/api/adoption
//post request

module.exports = router;
/*
    GET,POST, PUT, PATCH, DELETE - REST REQUESTS

    first_name
    firstName
    firstname

    Not going to do a post from the frontend
    You should be doing a fetch operation or using axios
    and handling successful responses on the frontend


    You want to do this on the parent level
    above backend/frontend

    git add .
    git commit -m "Some words for the commit - example"
    git push


*/