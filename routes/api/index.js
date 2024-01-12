const router = require('express').Router();

const animalsRoutes = require('./animal-routes');
router.use('/animals', animalsRoutes);

module.exports = router;
