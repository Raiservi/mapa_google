
//Creem el mapa inical================================================


// Afegim capa base satelit
 
var mapaForm = L.map("mapa4").setView([41.41, 2.226921], 5);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 18,
   }
 ).addTo(mapaForm);


//Agafem les dades del formulari========================================
function obtenirDadesForm(){
  
//  Resposta Radi Button============================================ 
var seleccio = document.getElementsByName("mariterres");
for(var i=0;i<seleccio.length; i+=1){
 if (seleccio[i].checked){
 var tipusEspecie= seleccio[i].value}
 }

// Resposta del ListBox======================================================================
 var llista = document.getElementById("llistat");
 var especieSeleccionada = llista.options[llista.selectedIndex].text

// Resposta data,longitut, latitut===========================================================

Long = (document.getElementById("long").value);
Lat = (document.getElementById("lat").value);
// var textLloc = document.getElementById("place").value;
// var textData = document.getElementById("dat").value;


alert(Long+"  "+Lat);


// Longitut= parseFloat(Long);
// Latitut=parseFloat(Lat);

 new mark.setLatLng([2.65, 12.196921]).addTo(mapaPosicioActual)
 mapaPosicioActual.setView([2.65, 12.196921],12);


}

// //===================================================================
// // Funcio per afegir el marker al mapa
// function afegirMapa(){

    // Marca.setLatLng([Long,Lat]).addTo(mapaForm); 

  
//======================================================================
//Funcio per afegim un popup i la seva info

// var info_popup,pop_up_complet

// function afegirPopup(){

//   pop_up_complet= ("Nom de la ubicacio:" + textLloc +"<br>"+ 

//   "Observada el dia: "+ textData + "<br>"+

//   "L especie observada es :"+ especieSeleccionada +"<br>"+

//   "El tipus d´especie es: " +  tipusEspecie     +"<br>");
//   }

//===========================================================================



  