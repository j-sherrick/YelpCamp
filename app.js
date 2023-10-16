const express = require('express');
const path = require('path');
const db = require('./controllers/db-connect');

db()
    .then(() => {
        console.log('db is connected');
    })
    .catch((error) => {
        console.error.apply(`db had an error: ${error}`);
    })

const Campground = require('./models/campground');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});

    res.render('campgrounds/index', { campgrounds });
});

app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id);

    res.render('campgrounds/show', { campground });
});

app.listen(3000, () => {
    console.log('serving on port 3000');
})