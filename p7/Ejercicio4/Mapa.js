var map;
var marker;
var myLatLng;
var mapOptions;
//Precargado de mapa y ubicacion
window.onload = navigator.geolocation.watchPosition(function (position) {
  setCurrentLocation(position.coords.latitude, position.coords.longitude); 
});
google.maps.event.addDomListener(window, 'load', initialize());
//Funciones
function setCurrentLocation(latitude, longitude) {
  myLatLng = { lat: latitude, lng: longitude };
  addMyLocationMarker();
}

function initialize() {
  mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(43.3661, -5.8425)
  };
  map = new google.maps.Map(document.getElementById('mapa-canvas'), mapOptions);
}

function addMyLocationMarker() {
  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Your location'
  });
}

function success(pos) {
  var crd = pos.coords;
  myLatLng = { lat: crd.latitude, lng: crd.longitude };
  addMyLocationMarker();
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
//Jquery
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

$("#btnCurrentLocation").click(function () {
  map = new google.maps.Map(document.getElementById('mapa-canvas'), mapOptions);
  navigator.geolocation.getCurrentPosition(success,error,options);
});

$("#btnCleanMarkers").click(function () {
  marker.setMap(null);
});

