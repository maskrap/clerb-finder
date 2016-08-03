var Clerb = require('./../js/clerb-finder.js').clerbModule;

var displayHumidity = function(city, humidityData) {
  $('.showClerb').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentClerbObject = new Clerb();
  $('#clerbLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentClerbObject.getClerb(city, displayHumidity);
  });
});
