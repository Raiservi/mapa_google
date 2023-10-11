//Creem el mapa inical

var mapaObtencioCoord = L.map("mapa3").setView([41.65, 2.196921], 8);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 20,
   }
 ).addTo(mapaObtencioCoord);

var x_sele, y_sele;

mapaObtencioCoord.on('click', onClick);


 var marcador = new L.marker()

 function onClick(click){

    var marcadorLoc = click.latlng;
    document.getElementById('xselec').innerHTML = marcadorLoc.lng;
    document.getElementById('yselec').innerHTML = marcadorLoc.lat;
    afegirMarker();}
  
    

   

function afegirMarker(){

    x_sele =parseFloat(document.getElementById('xselec').innerHTML) 
    y_sele=parseFloat(document.getElementById('yselec').innerHTML)
    marcador.setLatLng([y_sele,x_sele]).addTo(mapaObtencioCoord)
    
    .bindPopup("La posicio seleccionada és:"+"<br>"+"Longitut:  "+x_sele+"<br>"+"Latitut:  "+y_sele) 
}   

function netejar(){
  marcador.removeFrom(mapaObtencioCoord)
}

