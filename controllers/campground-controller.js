const db = require('../db-connect');
const Campground = db.campgrounds;

exports.create = (req, res) => {

    // Create a campground
    // const campground = {
    //     title: 'Tent City',
    //     description: 'Cheapest camping in San Francisco!',
    //     price: 'free',
    //     location: 'San Francisco'
    // };

    Campground.create(campground)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.error(error);
        })
};

exports.showAll = async (req, res) => {
    const campgrounds = await Campground.findAll();
    res.render('../views/campgrounds/index', { campgrounds });
};

exports.show = async (req, res) => {
    const campground = await Campground.findAll({
        where: {
            id: req.params['id']
        }
    });

    res.render('..views/show',{  campground });
}