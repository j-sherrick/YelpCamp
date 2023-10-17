const express = require('express');
const path = require('path');
const db = require('./controllers/db-connect');

// db()
//     .then(() => {
//         console.log('db is connected');
//     })
//     .catch((err) => {
//         console.error(`db had an error: ${err}`);
//     })

const Campground = require('./models/campground');
const { error } = require('console');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});

    res.render('campgrounds/index', { campgrounds });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
})

app.post('/campgrounds', async (req, res) => {
    const campground = new Campground(req.body.campground)
    await campground.save();

    res.redirect(`/campgrounds/${campground._id}`);
})

app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id);

    res.render('campgrounds/show', { campground });
});

app.listen(3000, () => {
    console.log('serving on port 3000');
})