const MapWrapper = function(container, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);

  // this.map.on("click", function(event){
  //   console.log(event);
  //   this.addMarker(event.latlng);
  //   console.log(this);
  // }.bind(this));

  this.map.on("click", event => this.addMarker(event.latlng));
}

MapWrapper.prototype.addMarker = function (markerCoords) {
  L.marker(markerCoords).addTo(this.map);
  L.marker(markerCoords).addTo(this.map).bindPopup(`The coordinates of this marker are: ${markerCoords}`);

};

MapWrapper.prototype.changeCoords = function (coords) {
  this.map.flyTo(coords, 12);
};
