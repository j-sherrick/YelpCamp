const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb');

const Campground = sequelize.define("campground", {
    title: DataTypes.TEXT,
    price: DataTypes.TEXT,
    description: DataTypes.TEXT,
    location: DataTypes.TEXT
});

module.exports = Campground;