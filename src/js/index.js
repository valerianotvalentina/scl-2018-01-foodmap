var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.431447, lng: -70.609332 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Aquí estás tú');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Estás sin conexión :(' :
        'Puedes aceptar la geolocalización nuevamente');
    infoWindow.open(map);
}


/*
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -33.431447, lng: -70.609332 }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
var locations = [
    { lat: -33.426641, lng: -70.6226397 },
    { lat: -33.4293881, lng: -70.5898788 },
    { lat: -33.444753, lng: -70.61657278 },
    { lat: -33.441741, lng: -70.6572053 },
    { lat: -33.449125, lng: -70.5998157 },
    { lat: -33.3949997, lng: -70.5843537 },
    { lat: -33.3949947, lng: -70.6171846 },


] */