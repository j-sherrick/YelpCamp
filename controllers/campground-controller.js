const res = require('express/lib/response');
const db = require('../db-connect');
const Campground = db.campgrounds;

exports.create = (req, res) => {

    // Create a campground
    const campground = {
        title: 'Tent City',
        description: 'Cheapest camping in San Francisco!',
        price: 'free',
        location: 'San Francisco'
    };

    Campground.create(campground)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.error(error);
        })
};