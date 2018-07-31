const app = function(){

  let coords = [45.0333332, -79.2999988];
  let zoom = 12;
  let container = "main-map"
  let markerCoords = [45.0456809, -79.330473];

  const mainMap = new MapWrapper(container, coords, zoom);
  mainMap.addMarker(markerCoords)

  mainMap.changeCoords([55.8678415, -4.2775452]);

}

// var handleButtonClick = function () {
//   var button = document.querySelector('button');
// }




window.addEventListener('DOMContentLoaded', app);
