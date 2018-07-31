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

};

MapWrapper.prototype.changeCoords = function (coords) {
  document.addEventListener('click',
  () => this.map.flyTo(coords, 12));
  L.marker(markerCoords).addTo(this.map).bindPopup(`The coordinates of this marker are: ${coords}`);
};
