//Creem el mapa inical

var mapaObtencioCoord = L.map("mapa3").setView([41.41, 2.226921], 8);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 18,
   }
 ).addTo(mapaObtencioCoord);