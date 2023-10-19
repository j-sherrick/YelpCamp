const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const ejsMate = require('ejs-mate');

// Connect to database and get Campground schema
const db = require('./controllers/db-connect');
const Campground = require('./models/campground');

// Create application
const app = express();

// Set view & template engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// parse request bodies
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// serve static files
app.use(express.static(path.join(__dirname, 'assets')));

// enable logging
// app.use(morgan('tiny'));

app.use('/campgrounds/:id', (req, res, next) => {
    console.log(req.method.toUpperCase(), req.baseUrl);
    next();
})

// default route
app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

// Campgrounds index
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});

    res.render('campgrounds/index', { campgrounds });
})

// New campground form
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
})

// Show a campground by id
app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id);

    res.render('campgrounds/show', { campground });
})

// Edit form
app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { campground });
})

// Post a new campground
app.post('/campgrounds', async (req, res) => {
    const campground = new Campground(req.body.campground)
    await campground.save();

    res.redirect(`/campgrounds/${campground._id}`);
})

// Update campground
app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${id}`);
})


app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

// Start the server
app.listen(3000, () => {
    console.log('serving on port 3000');
})