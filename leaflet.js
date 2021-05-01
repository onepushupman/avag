var mymap = L.map('mapid').setView([11.961480178971462, 79.59294741892283], 9);
var marker = L.marker([11.999426885316288, 79.78339699825607]).addTo(mymap);
var circle = L.circle([11.962271607277865, 79.44761131255852], {
    color: '#791D59',
    fillColor: '#E98C23',
    fillOpacity: 0.5,
    radius: 45000
}).addTo(mymap);
var popup = L.popup()
    .setLatLng([11.962271607277865, 79.44761131255852])
    .setContent("Our area we operate in.")
    .openOn(mymap);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWhyd24iLCJhIjoiY2tuOTE1MWRyMTNkaDJxcDlmOHJ5eWZ2MSJ9.VBwQGG91ikG3B62rbiwhlw'
}).addTo(mymap);
