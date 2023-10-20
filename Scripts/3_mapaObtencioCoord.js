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

    document.getElementById('selecx').innerHTML = marcadorLoc.lng;

    document.getElementById('selecy').innerHTML = marcadorLoc.lat;

    afegirMarker();

    }
//===================================================================
// Funcio per afegir el marker al mapa

var marcador = new L.marker()

var x_sele, y_sele;

function afegirMarker(){

    x_sele =parseFloat(document.getElementById('selecx').innerHTML);

    y_sele=parseFloat(document.getElementById('selecy').innerHTML);

    marcador.setLatLng([y_sele,x_sele]).addTo(mapaObtencioCoord); 

    }   

//======================================================================
//Funcio per afegim un popup i la seva info

var info_popup,pop_up_complet

function afegirPopup(){

      info_popup=prompt('Introduir el nom de la ubicacio del Marker:');

      pop_up_complet= ("Nom de la ubicacio:" + info_popup +"<br>"+ 

      "El n de marker es :"+ punt_N +"<br>"+

      "Longitut:  "+x_sele+"<br>"+"Latitut:  "+y_sele);
      }

//===========================================================================
// Funcio per netejar el marker

function netejar(){

  document.getElementById('selecx').innerHTML="";

  document.getElementById('selecy').innerHTML="";

      marcador.removeFrom(mapaObtencioCoord);

    //Bucle per netejar del planol tots els punts de l array

     for (var n=0 ; n<memoriaMarkers.length ; n+=1) {

            xinxeta[n].removeFrom(mapaObtencioCoord);}

   
    }

//============================================================================
//Funcio per guardar el punts

var memoriaMarkers = new Array ();

var posicioVectorPunts=0,punt_N=0

function afegirMemoria(){

      posicioVectorPunts= memoriaMarkers.length;

      punt_N =posicioVectorPunts+1

      afegirPopup();

      var markIntermedi = new Array(punt_N,info_popup,x_sele,y_sele,pop_up_complet);

      memoriaMarkers[posicioVectorPunts]=markIntermedi;

      alert ("S ha afegit una ubicacio anomenada  "+ info_popup+"  amb el nº de marker "+ punt_N);

      posicioVectorPunts=1+posicioVectorPunts;

      netejar()
      }

//=================================================================
//Funcio per mostrar els punts
 
var xinxeta = new Array()

function mostrarPunts(){


      for(var m=0;m<memoriaMarkers.length;m+=1) {
      
          xinxeta[m]=L.marker().setLatLng([memoriaMarkers[m][3],memoriaMarkers[m][2]])
          
          .bindPopup(memoriaMarkers[m][4])

          .addTo(mapaObtencioCoord);}
      
    }

//=======================================================================================
//Funcio per borrar contingut de la matriu

function borrarMemoriaArray(){

      memoriaMarkers=[];

      netejar();

      document.getElementsByTagName("table")[0].remove();

      window.location.reload(); 
    }



//==========================================================================================
// Per afegir una taula amb la informacio de cada punt guardat en la matriu.


var vector_titol = ["Num de marker","Nom de la ubicacio","Longitut","Latitut"]

function genera_taula() {

// var indexTaula= document.getElementsByTagName("table")[0]
// alert(indexTaula)



//Mirem si la taula existeix. Si existeix. si existeix l esborrem, cas contari la creem
  
  // Obtindre la referencia del element section del planol
  var body = document.getElementsByTagName("section")[1]

  // Crea un element <table> i un element <tbody>
  var taula = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var titol= document.createElement("tr");

  // Creem titol
  for(var l=0;l<4;l+=1){
        var encap= document.createElement("th");
        var tetxEncap =document.createTextNode( vector_titol[l])
        encap.appendChild(tetxEncap);
        titol.appendChild(encap);
          }
   
    tblBody.appendChild(titol)

  // Crea las celdas
          for (var i = 0; i < memoriaMarkers.length; i++) {
          // Crea las fileras de la taula
          var filera = document.createElement("tr");

                        for (var j = 0; j < 4; j++) {
                      
                          var cella = document.createElement("td");
                          var textCella = document.createTextNode(
                            memoriaMarkers[i][j] 
                          );
                          cella.appendChild(textCella);
                          filera.appendChild(cella);
                        }

          // agrega la filera al final de la taula (al final de l element tblbody)
          tblBody.appendChild(filera);
        }

  // posiciona  <tbody> sota l element <table>
  taula.appendChild(tblBody);
  // afegeix <table> dins de  <section[1]>
  body.appendChild(taula);
  taula.setAttribute("border", "2")
  
  
}
