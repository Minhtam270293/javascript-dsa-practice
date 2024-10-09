// navigator.geolocation returns a Geolocation
// Geolocation is an interface represent an object able to obtain the device's position programmatically
// Geolocation.getCurrentPosition() returns GeolocationPosition object with the data of device's position

// Syntax
// getCurrentPosition(success)
// getCurrentPosition(success, error)
// getCurrentPosition(success, error, options)
// success: callback function that takes GeolocationPosition as its input
// error: callback function that takes GeolocationPositionError as its input

// GeolocationPosition is an interface represent position of the concerned device at a given time.
// The position represents by GeolocationCoordinates object
// GeolocationPosition.coords --> GeolocationCoordinates
// GeolocationCoordinates.latitude
// GeolocationCoordinates.longitude

// Exercise 1: Basic Geolocation
// Task: Create a function that retrieves and logs the user's current latitude and longitude.

// function logCurrentPos() {

//     if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((pos) => {
//         const lat = pos.coords.latitude;
//         const long = pos.coords.longitude;
//         console.log(`latitude: ${lat}, longitude: ${long}`);
//     }, (error) => {console.error(`Error: ${error.message}`)})
//     } else {
//         console.error(`Geolocation is not supported by this browser`)
//     }
// };

// logCurrentPos();