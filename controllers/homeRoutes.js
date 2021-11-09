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
        const skillsData = await Skills.findAll().catch((err) => {
            res.json(err);
        });
        const skills = skillsData.map((skill) => skill.get({ plain: true }));
        res.render('about-me', {skills});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
