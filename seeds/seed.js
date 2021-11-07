const sequelize = require('../config/connection');
const {Project, Skills} = require('../models');

const projectData = require('./projectData.json');
const skillsData = require('./skillsData.json');

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    for (const project of projectData) {
        await Project.create({...project});
    }

    process.exit(0);
};

seedDatabase();
