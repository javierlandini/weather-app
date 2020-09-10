require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('rosario', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(data);
        })
    }
});
