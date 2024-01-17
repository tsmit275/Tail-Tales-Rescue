const router = require('express').Router();

const animalsRoutes = require('./animal-routes');
router.use('/animals', animalsRoutes);

module.exports = router;

//need a route for getting store items
//need a route for saving volunteer
//need a route for saving adoption request



//Frontend
//redux - redux store
/*
    Home - 
    Adoption
        Get your list of animals - GET
        have search
        clicking on picture takes you to adoption form
            saves to backend - POST
    Volunteer
        Form 
            Save to backend - POST
    Pages????
    Store
        Get your list of items - GET
        Click on items             
    
*/

