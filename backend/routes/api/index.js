const router = require('express').Router();

const adoptionRoutes = require('./adoption-routes');
const animalsRoutes = require('./animal-routes');
const volunteerRoutes = require('./volunteer-routes');
const contactRoutes = require('./contact-routes');

router.use('/animals', animalsRoutes);
router.use('/adoption', adoptionRoutes);
router.use('/volunteer', volunteerRoutes);
router.use('/contact', contactRoutes);

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

