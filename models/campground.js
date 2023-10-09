const { DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Campground = sequelize.define("campground", {
        title: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        }
    });
    return Campground;
}