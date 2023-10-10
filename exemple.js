function geoLocate()
{
   navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
}

function foundLocation(position)
{
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  window.location="/locations/geo/" + lat + "," + long;
}

function noLocation()
{
  alert('Could not find location');
}

$(document).ready(function() {
    geoLocate();
});