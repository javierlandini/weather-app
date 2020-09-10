require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2]
if (!location) {
    return console.log('Error. You need to provide a location.');
}

geocode(location, (error, { longitude, latitude, place} = {}) => {
    if (error) {
        console.log(error);
    }
    else {
        forecast(latitude, longitude, (error, forecast_data) => {
            if (error) {
                return console.log(error);
            }
            console.log(place)
            console.log(forecast_data);
        })
    }
});
