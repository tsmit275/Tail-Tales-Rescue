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

