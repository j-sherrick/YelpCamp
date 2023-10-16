const Campground = require('../models/campground');
const titleSeeds = require('../seed-data/seed-data');
const cities = require('../seed-data/cities');

function getRandom20() {
    return Math.floor(Math.random() * 20);
}

function getRandom1000() {
    return Math.floor(Math.random() * 1000);
}


