const { randomCampground } = require('./utils');
const db = require('../../controllers/db-connect');
const Campground = require('../campground');


for(let i = 0; i < 20; i++) {
    const camp = new Campground(randomCampground());
    camp.save()
        .then(() => {
            console.log('Camp Saved');
        })
        .catch(e => {
            console.error(`An error detected\n${e}`);
        })
}

console.log(all)