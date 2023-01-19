let maps;

function initMap() {
  maps = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 50.05743, lng:  23.96766 },
    zoom: 15,
  });
  let marker = new google.maps.Marker({
    position: {lat: 50.05743, lng:  23.96766 },
    map: maps,
    title: "Ми тут"

  })
}

window.initMap = initMap;