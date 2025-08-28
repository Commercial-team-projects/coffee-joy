let map;
let center = { lat: 42.3497, lng: -71.0834 };

async function initMap() {
  await google.maps.importLibrary('maps');
  await google.maps.importLibrary('marker');

  map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 15,
    mapId: '10388c36d5ea1d4a30d159ee',
    disableDefaultUI: true,
  });

  addMarker();
}

async function addMarker() {
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: center,
  });
}

initMap();
