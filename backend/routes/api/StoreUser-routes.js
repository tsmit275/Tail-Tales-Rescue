const router = require('express').Router();
const db = require('../../models');
const storeUser = db.storeUser;

router.get('/', async (req,res)=>{
    const allstoreUser = await db.storeUser.findAll();

    return res.status(200).send(allstoreUser);
})

module.exports = router;