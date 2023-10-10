const titles = require('../data/seed-data');
const cities    = require('../data/cities');
const db        = require("../db-connect");

getTitle = () => {
    random20 = () => {
        return Math.floor(Math.random() * 20);
    }

    let title = "";
    title += titles.descriptors[random20()];
    title += " " + titles.elements[random20()];
    title += " " + titles.places[random20()];

    return title;
}

getCity = () => {
    const random1000 = Math.floor(Math.random() * 1000);
    return `${cities[random1000].city}, ${cities[random1000].state}}`;
}

const Campground = db.campgrounds;

exports.populate = async () => {
    

    for (let i = 0; i < 50; i++) {
        const campground = {
            title: getTitle(),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            price: 5.99,
            location: getCity()
        };
    
        try {
            await Campground.create(campground);
        }
        catch(error) {
            console.error(error);
        }
    }
}
