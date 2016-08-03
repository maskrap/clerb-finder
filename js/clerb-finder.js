var apiKey = require('./../.env').apiKey;

function Clerb(){
}

Clerb.prototype.getClerb = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showClerb').text(error.responseJSON.message);
  });
}

exports.clerbModule = Clerb;
