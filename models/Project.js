const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deployed_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;