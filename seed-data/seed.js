const Campground = require('../models/campground');
const { descriptors, elements, places } = require('../seed-data/seed-data');
const cities = require('../seed-data/cities');

function getRandom20() {
    return Math.floor(Math.random() * 20);
}

function getRandom1000() {
    return Math.floor(Math.random() * 1000);
}

function getRandomTitle() {
    return `${descriptors[getRandom20()]} ${elements[getRandom20()]} ${places[getRandom20()]}`;
}

function getRandomLocation() {
    const i = getRandom1000();
    return cities[i].city +', ' + cities[i].state;
}

function getSeedData() {
    return {
        title: getRandomTitle(),
        price: 5.99,
        description: 'This is a description of this fantastic campground and resort!',
        location: getRandomLocation()
    }
}

async function seedDb() {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++) {
        const seed = getSeedData();
        const camp = new Campground(seed);
        camp.save();
    }
}

module.exports = seedDb;