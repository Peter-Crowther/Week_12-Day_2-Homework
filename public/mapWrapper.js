const MapWrapper = function(container, coords, zoom, contentString, aberdeenCoords) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, "click", function(event) {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.addMarker(position);
  }.bind(this));

}

MapWrapper.prototype.addMarker = function(coords, contentString) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  const infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
  marker.addListener('click', function() {
  infoWindow.open(this.googleMap, marker);
}.bind(this));
  this.markers.push(marker);
}

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}

MapWrapper.prototype.deleteMarkers = function() {
  this.markers.forEach(function(marker) {
  marker.setMap(null);
  });
  this.markers = [];
}

MapWrapper.prototype.goToAberdeen = function() {
  this.googleMap.setCenter(new google.maps.LatLng(57.149651, -2.099075));
}
