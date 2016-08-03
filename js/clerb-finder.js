var gMapsKey = require('./../.env').gMapsKey;

function Google(){
}

// Google.prototype.getClerb = function(city, displayFunction) {
//   $.get('https://maps.googleapis.com/maps/api/js?key=' + city + '&appid=' + googleMaps).then(function(response) {
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error) {
//     $('.showClerb').text(error.responseJSON.message);
//   });
// };

exports.googleModule = Google;
