

//Creem el mapa inical

var mapaPosicioActual = L.map("mapa2").setView([41.41, 2.226921], 8);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 18,
   }
 ).addTo(mapaPosicioActual);


 
var px,py;

 
  navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById('x').innerHTML = position.coords.longitude;
    document.getElementById('y').innerHTML = position.coords.latitude;
    document.getElementById('prec').innerHTML = position.coords.accuracy;
  
  });

  function trovalong(){
 px= parseFloat(document.getElementById('x').innerHTML);
 py=parseFloat(document.getElementById('y').innerHTML);
 pre=document.getElementById('prec').innerHTML;

 var mark = L.marker([py, px]).bindPopup("La teva posició actual és:"+"<br>"+"Longitut:  "+px+"<br>"+"Latitut:  "+py+"<br>"+"Precisió:  "+pre).addTo(mapaPosicioActual);

  mapaPosicioActual.addLayer (mark).
 setView([py, px], 18);

}

  function ocultar(){
    mapaPosicioActual.removeLayer(mark)
 .setView([41.41, 2.226921], 8);

  }

      

   