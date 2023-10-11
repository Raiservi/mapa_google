

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

var mark =new L.marker()

function afegir_capa(){

 px= parseFloat(document.getElementById('x').innerHTML);
 py=parseFloat(document.getElementById('y').innerHTML);
 pre=document.getElementById('prec').innerHTML;

  
  mark.setLatLng([py, px]).addTo(mapaPosicioActual)
      .bindPopup("La teva posició actual és:"+"<br>"+"Longitut:  "+px+"<br>"+"Latitut:  "+py+"<br>"+"Precisió:  "+pre) 
  
  mapaPosicioActual.setView([py, px], 18);
}



 function geolocalitzar(){
  navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById('x').innerHTML = position.coords.longitude;
    document.getElementById('y').innerHTML = position.coords.latitude;
    document.getElementById('prec').innerHTML = position.coords.accuracy;
    
  afegir_capa()
  });
}
 

  function ocultar(){
  mark.removeFrom(mapaPosicioActual);
 mapaPosicioActual.setView([41.65, 2.196921], 8);

 document.getElementById('x').innerHTML = "";
    document.getElementById('y').innerHTML = "";
    document.getElementById('prec').innerHTML = "";

  }

      

   