var Google = require('./../js/clerb-finder.js').googleModule;
$( document ).ready(function() {
  $('#locateUser').click(locateUser);
  $('#locateMarys').click(locateMarys);
  $('#locateClerbs').click(locateClerbs);
});

//google maps functions
function locateUser() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}



// this is the success callback from telling the navigator (your browser) to get the current user's position
// we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
// on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
// on error, geolocationError is called.


function geolocationSuccess(position) {
  // here we take the `position` object returned by the geolocation api
  // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
  // it 2 arguments: one for latitude, one for longitude.
  // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
  // But you must use coordinates to use this method.
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
  console.log(mapObject['data']);
}

function geolocationError(positionError) {
  alert(positionError);
}

function locateMarys() {
  var clerb = new google.maps.Map(document.getElementById('marys'), {
    center: {lat: 45.522743, lng: -122.677572},
    scrollwheel: false,
    zoom: 18,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });

  new google.maps.Marker({
    map: clerb,
    position: {lat: 45.522743, lng: -122.677572}
  });
}



function locateClerbs() {
  var Portland = new google.maps.LatLng(45.522743,-122.677572);

  map = new google.maps.Map(document.getElementById('clerbs'), {
      center: Portland,
      zoom: 15
    });

  var request = {
    location: Portland,
    radius: '500',
    query: 'strip club'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    }
  }
}
