/**
 * Utilities for seeding the database with random data. Does not connect to the database
 * or save any data on it's own
 */

const { first, second, third } = require('./names');
const cities = require('./cities');
const campGroups = require('../json/groups.json');
const campAmenities = require('../json/amenities.json');


// Builds a random Campground object
function randomCampground() {

    return {
        name: randomPickName(),
        groups: randomPickMany(campGroups.types, 3),
        amenities: randomPickMany(campAmenities.types, 6),
        location: randomPickLocation()
    }
}

// Picks one random element from an array `arr`
function randomPickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Picks `n` random, unique elements from an array `arr`
function randomPickMany(arr, n) {
    n = Math.floor(Math.random() * n) + 1; // Get a random amount [1, n] rather than just always having the same `n`
    let picksRemaining = arr;
    let picks = [];
    let pick = "";
    while( n > 0 && picks.length < arr.length) {
        pick = randomPickOne(picksRemaining);
        picks.push(pick);
        picksRemaining = picksRemaining.filter(p => p !== pick);
        n--;
    }
    return picks;
}

// Generates a random Campground name in the format '[FIRST] [SECOND] [THIRD]`
function randomPickName() {
    return randomPickOne(first) + ' ' + randomPickOne(second) + ' ' + randomPickOne(third);
}

// Gets a random city and state from the cities array
function randomPickLocation () {
    const location = randomPickOne(cities);

    return { city: location.city, state: location.state };
}


module.exports = { randomCampground, randomPickOne, randomPickMany };