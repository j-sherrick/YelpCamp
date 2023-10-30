const { randomCampground } = require('./utils');
const Campground = require('../campground');



async function seed(n) {
    await Campground.deleteMany({});
    for(let i = 0; i < n; i++) {
        // const temp = randomCampground();
        const camp = new Campground( randomCampground() );
        await camp.save();
        console.log(`Saved camp: ${camp.name}`);
    }
    return n;
}

module.exports = { seed };