function initMap() {
    const myLatLng = new google.maps.LatLng(52.639503515370336, -114.24731689513045);
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;
  