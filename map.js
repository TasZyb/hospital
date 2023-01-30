let maps;

function initMap() {
  maps = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 50.0570774, lng:  23.97294676 },
    zoom: 18,
  });
  let marker = new google.maps.Marker({
    position: {lat: 50.0570774, lng:  23.9729467 },
    map: maps,
    title: "Ми тут"

  })
}

window.initMap = initMap;