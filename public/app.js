const initialize = function() {
  const center = {
    lat: 55.946962,
    lng: -3.20195
  };

  const aberdeenCoords = {
    lat: 57.149651,
    lng: -2.099075
  };

  const container = document.querySelector("#main-map");
  const mainMap = new MapWrapper(container, center, 17);


  const contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">CodeClan</h1>'+
  '<div id="bodyContent">'+
  '<p><b>CodeClan</b> Digital Skills Academy, preferred software development'+
  ' bootcamp for celebrities such as The John Duncan and Marta from The Hunt for Red October.</p>'
  '</div>'+
  '</div>';


  mainMap.addClickEvent();
  mainMap.addMarker(center, contentString);

  const button = document.querySelector("#bounce");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  const button2 = document.querySelector("#delete");
  button2.addEventListener("click", mainMap.deleteMarkers.bind(mainMap));

  const button3 = document.querySelector("#aberdeen");
  button3.addEventListener("click", mainMap.goToAberdeen.bind(mainMap))

}

document.addEventListener("DOMContentLoaded", initialize);
