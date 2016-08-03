var Google = require('./../js/clerb-finder.js').googleModule;


// $(document).ready(function() {
//   var currentClerbObject = new Clerb();
//   $('#clerbLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentClerbObject.getClerb(city, displayHumidity);
//
//   map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });
//   });
// });
//
//

var Google = require('./../js/clerb-finder.js').googleModule;
var gMapsKey = require('./../.env').gMapsKey;

$(document).ready(function() {

  $('#city').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').empty();
    $('#map').html('<iframe width="600" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key='+ gMapsKey +
    '&q='+location+ '"></iframe>');
  });
});
