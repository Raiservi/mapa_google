var mapaForm = L.map("mapa4").setView([41.398, 2.126921], 12);

// Afegim capa base satelit
 
 

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapaForm)
 
 

 function dadesForm(){
            new mark.setLatLng([2.65, 12.196921]).addTo(mapaForm)
            mapaPosicioActual.setView([2.65, 12.196921],12);

                 }