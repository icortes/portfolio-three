const router = require('express').Router();
const {Skills} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const skillsData = await Skills.findAll({});
        res.status(200).json(skillsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;