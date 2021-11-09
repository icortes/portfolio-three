const router = require('express').Router();
const {Project, Skills} = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/about-me', async (req, res) => {
    try {
        const skillsData = await Skills.findAll({});
        res.render('about-me', {skillsData});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
