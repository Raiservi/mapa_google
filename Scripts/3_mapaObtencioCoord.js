//=================================================================
//Creem el mapa inical

var mapaObtencioCoord = L.map("mapa3").setView([41.65, 2.196921], 8);

// Afegim capa base satelit
 
 L.tileLayer(
  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  {
     maxZoom: 20,
   }
 ).addTo(mapaObtencioCoord);


//=======================================================================
//Funcio per obtenir la posicio del clik en el mapa

mapaObtencioCoord.on('click', onClick);

function onClick(click){

    var marcadorLoc = click.latlng;

    document.getElementById('xselec').innerHTML = marcadorLoc.lng;

    document.getElementById('yselec').innerHTML = marcadorLoc.lat;

    afegirMarker();
    }
//===================================================================
// Funcio per afegir el marker al mapa

var marcador = new L.marker()

var x_sele, y_sele;

function afegirMarker(){

    x_sele =parseFloat(document.getElementById('xselec').innerHTML);

    y_sele=parseFloat(document.getElementById('yselec').innerHTML);

    marcador.setLatLng([y_sele,x_sele]).addTo(mapaObtencioCoord); 

    }   

//======================================================================
//Funcio per afegim un popup i la seva info

var info_popup,pop_up_complet

function afegirPopup(){

  info_popup=prompt('Introduir el nom de la localitzacio del Marker:');

  pop_up_complet= ("Nom de la posicio:" + info_popup +"<br>"+ 

  "La posicio seleccionada és:"+"<br>"+

  "Longitut:  "+x_sele+"<br>"+"Latitut:  "+y_sele);
  }

//===========================================================================
// Funcio per netejar el marker

function netejar(){

  marcador.removeFrom(mapaObtencioCoord);

//Bucle per netejar del planol tots els punts de l array

  for(i=0;i<memoriaMarkers.length;i+=1) {

  xinxeta[i].removeFrom(mapaObtencioCoord);}

  document.getElementById('xselec').innerHTML="";

  document.getElementById('yselec').innerHTML="";
}

//============================================================================
//Funcio per guardar el punts

var memoriaMarkers = new Array ();

function afegirMemoria(){

var  posicioVectorPunts = memoriaMarkers.length;

afegirPopup();

var markIntermedi = new Array(y_sele,x_sele,pop_up_complet);

  

  memoriaMarkers[posicioVectorPunts]=markIntermedi;
  
  

  alert ("S ha afegit el lloc anomentat  "+ info_popup+"  amb el nº de marcador "+ posicioVectorPunts);

 netejar();

 posicioVectorPunts +=1;
}

//=================================================================
//Funcio per mostrar els punts
 
 var xinxeta = new Array()

function mostrarPunts(){

   let posicioVectorPunts =memoriaMarkers.length

  for(i=0;i<posicioVectorPunts;i+=1) {
   

  xinxeta[i]=L.marker().setLatLng([memoriaMarkers[i][0],memoriaMarkers[i][1]])
  
  .bindPopup(memoriaMarkers[i][2])

    .addTo(mapaObtencioCoord);}
}

//==========================================================================================
// Per afegir una taula amb la informacio de cada punt guardat en la matriu.

// document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");

//       var i, j;

//       for(i=0;i<posicioVectorPunts;i+=1) {
//         document.write("<tr>");

//         document.write("<td><b>" + posicioVectorPunts[i] + "</b></td>");

//         for (j = 0; j =1;) {
//           document.write("<td>" + memoriaMarkers[i][j] + "</td>");
//         }
//         document.write("</tr>");
//       }
//       document.write("</table>");



//==============================================================================================================