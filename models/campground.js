const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campingGroups = require('./json/groups.json');
const campingAmenities = require('./json/amenities.json');

function normalizeArray(arr) {
    return [ ...Set( arr.map(e => e.toLowerCase()) ) ];
} 

function validateTypes(givenTypes, allowedTypes) {
    let validType = givenTypes.length > 0;

    for (let i = 0; i < givenTypes.length && validType; i++) {
        valid = allowedTypes.has(givenTypes[i]);
    }
    
    return valid;
}

const CampgroundSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Campground must have a name!']  
    },

    groups: {
        type: [String],
        required: [true, 'Must provide at least one group']
        // set: normalizeArray,
        // validate: {
        //     validator: function(t) {
        //         return validateTypes(t, campingGroups.types);
        //     }
        // }
    },

    amenities: {
        type: [String]
        // set: normalizeArray,
        // validate: {
        //     validator: function(t) {
        //         return validateTypes(t, campingAmenities.types);
        //     }
        // }
    },

    location: {
        type: {
            city: {
                type: String,
                required: [true, 'Must provide a city']
            },
            state: {
                type: String,
                required: [true, 'Must provide a state']
            }
        },
        required: [true, 'Location is required'],
        region: String
    },

    description: String,
    rating: Number
})

module.exports = mongoose.model('Campground', CampgroundSchema);