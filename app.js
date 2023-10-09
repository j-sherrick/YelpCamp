const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');

const { Sequelize } = require('sequelize');
console.log('...imported Sequelize class');
console.log('...got our data model');

const database = 'db_yelpcamp';
const username = 'campdirector';
const password = 'Recovery13#';

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mariadb'
});
const Campground = require('./models/campground');

console.log('...instantiated the database');

sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
    })
    .catch(error => {
        console.error(error);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {greeting: 'HELLO FROM YELPCAMP'});
})

app.get('/makecampground', async (req, res) => {

    await Campground.sync({force: true});

    Campground.create({
        title: 'Tent City',
        description: 'Cheapest camping in San Francisco!',
        price: 'free',
        location: 'San Francisco'
    }).then(camp => {
            res.send(camp);
        })
        .catch(error => {
            console.log(error);
        })
})

app.listen(3000, () => {
    console.log('serving on port 3000');
})