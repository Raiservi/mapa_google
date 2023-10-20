var mapaForm = L.map("mapa4").setView([41.41, 2.226921], 5);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 18,
   }
 ).addTo(mapaForm);

 function dadesForm(){
            new mark.setLatLng([2.65, 12.196921]).addTo(mapaPosicioActual)
            mapaPosicioActual.setView([2.65, 12.196921],12);

                 }