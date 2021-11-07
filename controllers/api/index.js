const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const skillsRoutes = require('./skillsRoutes');

router.use('/projects', projectRoutes);
router.use('/skills', skillsRoutes);

module.exports = router;
